function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var msg = document.getElementsByClassName("errmsg");
    // if (username == null || password == null) {
    //     msg.innerHTML = 'enter all the fields';
    // }

    if ((username == "aruncr0122@gmail.com" && password == "aruncr0122") || (username == "1js18is025" && password == "aruncr0122")) {
        alert("Login successful");
    }
    else {
        alert("Login failed");
        alert("please enter the correct username and password")
    }
}