$('footer').eq(0).html('&copy; MCS, 2020')
AOS.init();
function getUiConfig() {
  return {
    'callbacks': {
      // Called when the user has been successfully signed in.
      'signInSuccessWithAuthResult': function(authResult, redirectUrl) {
        if (authResult.user) {
          handleSignedInUser(authResult.user);
        }
        if (authResult.additionalUserInfo) {
          document.getElementById('is-new-user').textContent =
              authResult.additionalUserInfo.isNewUser ?
              'New User' : 'Existing User';
        }
        // Do not redirect.
        return false;
      }
    },
    // Opens IDP Providers sign-in flow in a popup.
    'signInFlow': 'popup',
    'signInOptions': [
      {
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        scopes :[
          'login',
          'email',          
        ]
      },
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // Whether the display name should be displayed in Sign Up page.
        requireDisplayName: true,
        signInMethod: getEmailSignInMethod()
      },
      var signInWithPopup = function() {
        window.open(getWidgetUrl(), 'Sign In', 'width=985,height=735');
      };
      var handleSignedInUser = function(user) {
        document.getElementById('user-signed-in').style.display = 'block';
        document.getElementById('user-signed-out').style.display = 'none';
        document.getElementById('name').textContent = user.displayName;
        document.getElementById('email').textContent = user.email;
        document.getElementById('phone').textContent = user.bloodgroup;
        if (user.photoURL) {
          var photoURL = user.photoURL;
          if ((photoURL.indexOf('googleusercontent.com') != -1) ||
        (photoURL.indexOf('ggpht.com') != -1)) {
      photoURL = photoURL + '?sz=' +
          document.getElementById('photo').clientHeight;
    }
    document.getElementById('photo').src = photoURL;
    document.getElementById('photo').style.display = 'block';
  } else {
    document.getElementById('photo').style.display = 'none';
  }
};
var handleSignedOutUser = function() {
  document.getElementById('user-signed-in').style.display = 'none';
  document.getElementById('user-signed-out').style.display = 'block';
  ui.start('#firebaseui-container', getUiConfig());
};
firebase.auth().onAuthStateChanged(function(user) {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('loaded').style.display = 'block';
  user ? handleSignedInUser(user) : handleSignedOutUser();
});
var initApp = function() {
  document.getElementById('sign-in-with-popup').addEventListener(
    'click', signInWithPopup);
document.getElementById('sign-out').addEventListener('click', function() {
  firebase.auth().signOut();
});
  document.getElementById('email-signInMethod-password').addEventListener(
    'change', handleConfigChange);
document.getElementById('email-signInMethod-emailLink').addEventListener(
    'change', handleConfigChange);
// Check the selected email signInMethod mode.
document.querySelector(
    'input[name="emailSignInMethod"][value="' + getEmailSignInMethod() + '"]')
    .checked = true;
};

window.addEventListener('load', initApp);