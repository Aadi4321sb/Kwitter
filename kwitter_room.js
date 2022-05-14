
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDnFOyMjD8-Npkzz9vyvmnALCPaoMBRXQk",
      authDomain: "kwitter-d9b9c.firebaseapp.com",
      projectId: "kwitter-d9b9c",
      storageBucket: "kwitter-d9b9c.appspot.com",
      messagingSenderId: "742854123607",
      appId: "1:742854123607:web:d911d0782c6ca56a444312"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
