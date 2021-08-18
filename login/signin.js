
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

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //error detection and say it
    promise.catch(e => alert(e.message));
    alert("Please Wait While We Process Your Request, We Will Redirect You To Our Dashboard Soon After Successful Registration!");
  }

  //signin function
  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    //error detection and say it
    promise.catch(e => alert(e.message));
  }
    
  auth.onAuthStateChanged(function(user){
    
    //If The User Is Signed In Then Only The User Will Be Redirected
    if(user){
      var email = user.email;
      alert("Welcome " + email);
      //Take user to a different or home page
      window.location.href = "dashboard.html";
    }else{
      
      alert("Presently You Are Not Signed In! Sign In To Continue...");
      //no user is signed in
    }
});
