// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5ARif0EjXUStHcHRmMMvkB8gbtMQlgs4",
    authDomain: "smart-medic-login.firebaseapp.com",
    projectId: "smart-medic-login",
    storageBucket: "smart-medic-login.appspot.com",
    messagingSenderId: "923800103143",
    appId: "1:923800103143:web:19dd2f33bb74852b109a42"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //const authentication
  const auth = firebase.auth();

//Handle Account Status
  firebase.auth().onAuthStateChanged(user => {
  if(!user) {
    window.location = 'signin.html';
  }
});

//sign out function
  function signOut(){
    auth.signOut();
    window.location = 'signin.html';
  }
  