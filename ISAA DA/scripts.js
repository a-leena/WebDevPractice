user_info = [
    {
        "userID": "abc123",
        "pin": "123456",
        "imageID": 4,
        "password": "robust#Delirium"
    },
    {
        "userID": "def456",
        "pin": "456789",
        "imageID": 9,
        "password": "&deltA!absolutum"
    },
    {
        "userID": "ghi789",
        "pin": "789012",
        "imageID": 3,
        "password": "Terlyn@bingel"
    },
    {
        "userID": "jkl012",
        "pin": "012345",
        "imageID": 8,
        "password": "rock%wolves@Dungeons"
    },
    {
        "userID": "mno345",
        "pin": "345678",
        "imageID": 1,
        "password": "hanfilia$Taos",
    },
    {
        "userID":"pqr678",
        "pin": "6789012",
        "imageID": 2,
        "password": "meow*Nexus"
    },
    {
        "userID":"stu901",
        "pin": "901234",
        "imageID": 9,
        "password": "Rubet#zieon_"
    },
    {
        "userID":"vxy234",
        "pin": "234567",
        "imageID": 7,
        "password": "zqeu!Iron"
    },
    {
        "userID":"zab567",
        "pin": "567890",
        "imageID": 6,
        "password": "ultron-Bruce_rogers"
    },
    {
        "userID": "20BCE0200",
        "pin": "953978",
        "imageID": 5,
        "password": "chipmunks&Tacos",
    }
]

function checkUID() {
    var uid = document.getElementById("uid2").value;
    if (!uid) {
        document.getElementById("invalidUID").innerHTML = "Enter a User ID";
    }
    else {
        var i, available = true;
        for (i = 0; i < user_info.length; i++) {
            if (uid == user_info[i].userID) {
                available = false;
            }
        }
        if (available) {
            document.getElementById("invalidUID").innerHTML = "User ID available";
            return true;
        }
        else {
            document.getElementById("invalidUID").innerHTML = "User ID already taken";
        }
    }
    return false;
}

function checkpin(n) {
    var pin;
    var pintag;
    if (n == 1) {
        pin = document.getElementById("pin").value;
        pintag = "invalidPin";
    }
    else {
        pin = document.getElementById("pin2.0").value;
        pintag = "invalidPin2.0"
    }
    if (!pin) {
        document.getElementById(pintag).innerHTML = "";
    }
    else if (pin.match(/[^0-9]/)) {
        document.getElementById(pintag).innerHTML = "Only digits are allowed";
    }
    else if (pin.length != 6) {
        document.getElementById(pintag).innerHTML = "Pin must have 6 digits";
    }
    else {
        document.getElementById(pintag).innerHTML = "";
        return true;
    }
    return false;
}

function pinConfirm() {
    var pin = document.getElementById("pin2.0").value;
    var pin_confirm = document.getElementById("pin2.1").value;
    if (!pin_confirm) {
        document.getElementById("pin_confirm").innerHTML = "";
        return false;
    }
    else if (pin != pin_confirm) {
        document.getElementById("pin_confirm").innerHTML = "Re-entered Pin doesn't match!";
        return false;
    }
    else {
        document.getElementById("pin_confirm").innerHTML = "Pin Confirmed!";
        return true;
    }
}

function getImageID(a, n) {
    var imgID = Number(a);
    let imgBt = document.querySelectorAll(".imgButton");
    let i;
    imgBt[imgID - 1].addEventListener("click", () => {
        imgBt[imgID - 1].style.border = "8px solid cyan";
        for (i = 0; i < 9; i++) {
            if (i != imgID - 1) {
                imgBt[i].style.border = "8px solid white";
                imgBt[i].style.pointerEvents = "none";
            }
        }
        document.getElementById("notSelected").innerHTML = "";
        if (n == 1) {
            document.querySelector(".imageID").setAttribute('id', imgID);
        }
        else {
            var index = document.querySelector(".welcome").id;
            if (imgID == user_info[index].imageID) {
                window.alert("Correct selection! Proceed to Password Verification");
                var url = 'https://a-leena.github.io/WebDevPractice/ISAA%20DA/passwordCheck.htmlindex=' + encodeURIComponent(index);
                document.location.href = url;
                window.open("passwordCheck.html", '_blank');
            }
            else {
                window.alert("Incorrect selection! Go back to Login Page");
                window.open("index.html", "_self");
            }
        }
    });
    console.log(imgID);
}

function checkpw(n) {
    var pw;
    var pwtag;
    if (n == 1) {
        pw = document.getElementById("pw").value;
        pwtag = "invalidPW";
    }
    else {
        pw = document.getElementById("pw2.0").value;
        pwtag = "invalidPW2.0";
    }
    if (!pw) {
        document.getElementById(pwtag).innerHTML = "";
    }
    else if (pw.match(/[0-9]/)) {
        document.getElementById(pwtag).innerHTML = "No digits allowed in the password";
    }
    else if (!pw.match(/(?=.*[A-Z])/)) {
        document.getElementById(pwtag).innerHTML = "Password must contain at least one uppercase letter";
    }
    else if (!pw.match(/(?=.*[@$#!%*?&-/_])/)) {
        document.getElementById(pwtag).innerHTML = "Password must contain at least one special character";
    }
    else if (pw.length < 6) {
        document.getElementById(pwtag).innerHTML = "Password must have at least 6 characters";
    }
    else {
        document.getElementById(pwtag).innerHTML = "";
        return true;
    }
    return false;
}

function pwConfirm() {
    var pw = document.getElementById("pw2.0").value;
    var pw_confirm = document.getElementById("pw2.1").value;
    if (!pw_confirm) {
        document.getElementById("pw_confirm").innerHTML = "";
    }
    else if (pw != pw_confirm) {
        document.getElementById("pw_confirm").innerHTML = "Re-entered Password doesn't match";
    }
    else {
        document.getElementById("pw_confirm").innerHTML = "Password Confirmed!"
        return true;
    }
    return false;
}

function afterValid() {
    if (checkUID()) {
        document.getElementById("invalidUID").innerHTML = "";
    }
    if (pinConfirm()) {
        document.getElementById("pin_confirm").innerHTML = "";
    }
    if (pwConfirm()) {
        document.getElementById("pw_confirm").innerHTML = "";
    }
}

function addUser() {
    var uid = document.getElementById("uid2").value,
        pin = document.getElementById("pin2.0").value,
        imgID = document.querySelector(".imageID").id,
        pw = document.getElementById("pw2.0").value;
    console.log(uid);
    console.log(pin);
    console.log(imgID);
    console.log(pw);
    if (!uid | !checkUID()) {
        document.getElementById("proceedRegister").innerHTML = "Please enter a valid User ID";
    }
    else if (!pin | !checkpin()) {
        document.getElementById("proceedRegister").innerHTML = "Please enter a valid Pin";
    }
    else if (!document.getElementById("pin2.1").value | !pinConfirm()) {
        document.getElementById("proceedRegister").innerHTML = "Please confirm the entered Pin";
    }
    else if (!imgID) {
        document.getElementById("proceedRegister").innerHTML = "Please select an image";
    }
    else if (!pw | !checkpw()) {
        document.getElementById("proceedRegister").innerHTML = "Please enter a valid Password";
    }
    else if (!document.getElementById("pw2.1").value | !pwConfirm()) {
        document.getElementById("proceedRegister").innerHTML = "Please confirm the entered Password";
    }
    else {
        document.getElementById("proceedRegister").innerHTML = "";
        window.alert("User Registration Successful! Proceed to Login");
        user_info.push(
            {
                "userID": uid,
                "pin": pin,
                "imageID": imgID,
                "password": pw
            }
        );
        console.log(user_info);
        return true;
    }
    return false;
}

function validate_UID_pin() {
    var uid = document.getElementById("uid").value;
    var pin = document.getElementById("pin").value;
    if (!uid || !pin) {
        document.getElementById("proceedCheck").innerHTML = "Enter your User ID and Pin Number";
        return false;
    }
    var i;
    for (i = 0; i < user_info.length; i++) {
        if (user_info[i].userID == uid && user_info[i].pin == pin) {
            console.log(uid);
            //var url = 'file:///C:/Users/Aleena/Desktop/Work/Progs/WebDev/ISAA%20DA/imageVerification.html?index=' + encodeURIComponent(i);
            var url = 'https://a-leena.github.io/WebDevPractice/ISAA%20DA/imageVerification.html?index=' + encodeURIComponent(i);
            document.location.href = url;
            window.open("imageVerification.html", '_blank');
            return true;
        }
    }
    document.getElementById("proceedCheck").innerHTML = "Invalid User ID or Pin";
    return false;
}

function getIndex() {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, temp;
    for (var i = 0, l = params.length; i < l; i++) {
        temp = params[i].split('=');
        data[temp[0]] = temp[1];
    }
    document.querySelector(".welcome").id = data.index;
}

function validate_pw() {
    var pw = document.getElementById("pw").value;
    var index = document.querySelector(".welcome").id;
    if (!pw) {
        document.getElementById("loginCheck").innerHTML = "Enter your Password";
    }
    else {
        if (pw == user_info[index].password & checkpw(1)) {
            document.getElementById("loginCheck").innerHTML = "User verified! Login Successful";
            var otherButtons = document.getElementById("nextStage");
            otherButtons.style.display = "block";
            return true;
        }
        else {
            window.alert("Invalid password! User Login Failed");
            window.open("index.html", "_self");
        }
    }
    return false;
}

function showPassword(n) {
    var ID;
    if (n==1) { 
        ID = "pin";
    }
    else {
        ID = "pw";
    }
    var pass = document.getElementById(ID);
    if (pass.type === "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
}
