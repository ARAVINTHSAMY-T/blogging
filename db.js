// Firestore operations for the blog project
import { db, collection, addDoc, setDoc, doc, getDoc, getDocs, query, orderBy, limit, serverTimestamp, updateDoc, increment } from './firebase-init.js';

// Collections used:
// users (docId = email)
// posts (docId auto or provided) with fields: title, category, content, image, authorEmail, createdAt, likes
// comments (subcollection under posts/{postId}/comments) with fields: text, authorEmail, createdAt

export async function createOrUpdateUser(email, data) {
  const userRef = doc(db, 'users', email.toLowerCase());
  await setDoc(userRef, { ...data, updatedAt: serverTimestamp() }, { merge: true });
  return userRef.id;
}

export async function addPost({ title, category, content, image, authorEmail }) {
  const ref = await addDoc(collection(db, 'posts'), {
    title,
    category,
    content,
    image: image || '',
    authorEmail: authorEmail.toLowerCase(),
    createdAt: serverTimestamp(),
    likes: 0
  });
  return ref.id;
}

export async function getRecentPosts(max = 12) {
  const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(max));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function incrementPostLike(postId, amount = 1) {
  const ref = doc(db, 'posts', postId);
  await updateDoc(ref, { likes: increment(amount) });
}

export async function getPost(postId) {
  const ref = doc(db, 'posts', postId);
  const snap = await getDoc(ref);
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}


