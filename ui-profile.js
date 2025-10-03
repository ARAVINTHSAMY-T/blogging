// Keeps the profile box (top-left) consistent across pages
(function () {
  function updateProfile() {
    var name = localStorage.getItem('customName') || localStorage.getItem('loggedInUser') || 'User';
    var avatar = localStorage.getItem('profileAvatar');
    var profileNameEl = document.getElementById('profileName');
    var avatarEl = document.getElementById('profileBarAvatar');
    if (profileNameEl) profileNameEl.textContent = name;
    if (avatarEl) {
      if (avatar) {
        avatarEl.src = avatar;
      } else {
        avatarEl.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', updateProfile);
  window.addEventListener('storage', function (e) {
    if (e.key === 'customName' || e.key === 'loggedInUser' || e.key === 'profileAvatar') {
      updateProfile();
    }
  });
})();


