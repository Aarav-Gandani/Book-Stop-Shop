function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("login.html");
}
function yay(){
    console.log("done");
    window.location.replace("main.html");
}