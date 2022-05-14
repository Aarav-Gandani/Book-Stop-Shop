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

function addUser(){
    window.location ="ins.html";
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
        firebase.database().ref("/").child(user_name).update({
              purpose:"adding name"
        }); 
    }
    function addPhoneNumber(){
        phone_number=document.getElementById("phone_number").value;
        localStorage.setItem("phone_number", phone_number);
            firebase.database().ref("/").child(phone_number).update({
                  purpose:"adding phone number"
            }); 
    }
    function addPhoneNumber(){
        phone_number=document.getElementById("phone_number").value;
        localStorage.setItem("phone_number", phone_number);
            firebase.database().ref("/").child(phone_number).update({
                  purpose:"adding phone number"
            }); 
    }
    function addPhoneNumber(){
        phone_number=document.getElementById("phone_number").value;
        localStorage.setItem("phone_number", phone_number);
            firebase.database().ref("/").child(phone_number).update({
                  purpose:"adding phone number"
            }); 
    }