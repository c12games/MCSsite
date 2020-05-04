$('footer').eq(0).html('&copy; MCS, 2020')
AOS.init();
var firebaseConfig = {
    apiKey: "AIzaSyDrW5S4gmgfHblaJzIuQqLKml8nhH4hQnI",
    authDomain: "medical-care-system-b79fd.firebaseapp.com",
    databaseURL: "https://medical-care-system-b79fd.firebaseio.com",
    projectId: "medical-care-system-b79fd",
    storageBucket: "medical-care-system-b79fd.appspot.com",
    messagingSenderId: "158317669865",
    appId: "1:158317669865:web:e2b4ad0e339be590386f78",
    measurementId: "G-WD5F6J4MW6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  