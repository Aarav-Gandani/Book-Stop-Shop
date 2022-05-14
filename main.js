var firebaseConfig = {
    apiKey: "AIzaSyBPvSP52TcLg6mCUrX77s_bYv0K0kAn2e4",
    authDomain: "book-stop-shop.firebaseapp.com",
    databaseURL: "https://book-stop-shop-default-rtdb.firebaseio.com",
    projectId: "book-stop-shop",
    storageBucket: "book-stop-shop.appspot.com",
    messagingSenderId: "27770747045",
    appId: "1:27770747045:web:731df10cb22ffb034e354c"
  };
  
  // Initialize Firebase
  database.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user").innerHTML = "Welcome " + user_name + "!";
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("login.html");
}
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Names = childKey;
         console.log("Name" + Names);
        row = "<div class='Name' id="+Names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  getData();

  