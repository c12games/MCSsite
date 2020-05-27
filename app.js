(function() {
	// Your web app's Firebase configuration
	const config = {
	  apiKey: "AIzaSyDrW5S4gmgfHblaJzIuQqLKml8nhH4hQnI",
 	  authDomain: "medical-care-system-b79fd.firebaseapp.com",
      databaseURL: "https://medical-care-system-b79fd.firebaseio.com",
      projectId: "medical-care-system-b79fd",
      storageBucket: "medical-care-system-b79fd.appspot.com",
      messagingSenderId: "158317669865",
      appId: "1:158317669865:web:e2b4ad0e339be590386f78",
      measurementId: "G-WD5F6J4MW6",
    };
  // Initialize Firebase
  firebase.initializeApp(config);
  //Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtpassword = document.getElementById('txtpassword');
  const btnlogin = document.getElementById('btnlogin');
  const btnlogout = document.getElementById('btnlogout');
  //Add login event
  btnlogin.addEventListener('click', e => {
  	//Get email and password
  const email = txtEmail.value;
  const password = txtpassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, password);	
  promise.catch(e => console.log(e.message));
  })
}());
