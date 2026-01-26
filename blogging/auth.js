// Authentication utilities: Google Sign-In and user document bootstrap
import { auth, provider, signInWithPopup, onAuthStateChanged, signOut, db, doc, getDoc, setDoc, serverTimestamp } from './firebase-init.js';

// Sign in with Google. Uses the email as the user document ID in Firestore.
export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const email = (user.email || '').toLowerCase();

  const userRef = doc(db, 'users', email);
  const snap = await getDoc(userRef);
  if (!snap.exists()) {
    await setDoc(userRef, {
      email,
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
  } else {
    await setDoc(userRef, { displayName: user.displayName || '', photoURL: user.photoURL || '', updatedAt: serverTimestamp() }, { merge: true });
  }
  localStorage.setItem('loggedInUser', user.displayName || email);
  localStorage.setItem('profileAvatar', user.photoURL || '');
  return user;
}

export function watchAuth(callback) {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export async function logout() {
  await signOut(auth);
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('profileAvatar');
}


