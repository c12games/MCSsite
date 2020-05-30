function getEmailSignInMethod() {
    var config = parseQueryString(location.hash);
    return config['emailSignInMethod'] === 'password' ?
        'password' : 'emailLink';
  }