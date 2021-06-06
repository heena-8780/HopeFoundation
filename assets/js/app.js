// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyBxNAKWqdMELyhuBvnf9PvD5xeQ0Chg2cA",
    authDomain: "hopefoundation-6995c.firebaseapp.com",
    databaseURL: "https://hopefoundation-6995c-default-rtdb.firebaseio.com",
    projectId: "hopefoundation-6995c",
    storageBucket: "hopefoundation-6995c.appspot.com",
    messagingSenderId: "12321634043",
    appId: "1:12321634043:web:23ffc2a3b317b13f39e25e",
    measurementId: "G-2HGV18MK0W"
  };
  
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }