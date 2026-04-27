function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
    document.getElementById("forgot-form").style.display = "none";
    document.getElementById("login-form").reset();
    document.getElementById("forgot-form").reset();
}

function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("forgot-form").style.display = "none";
    document.getElementById("register-form").reset();
    document.getElementById("forgot-form").reset();
}

function showForgot() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "none";
    document.getElementById("forgot-form").style.display = "block";
    document.getElementById("login-form").reset();
    document.getElementById("register-form").reset();
}

function loginUser(event){
    event.preventDefault();
    let validEmails = ["shimaa@scentra.com", "hana@scentra.com","ataa@scentra.com"];
    let validPasses = ["123456", "456789","345678"];
    let email = document.getElementById("login-email").value;
    let pass = document.getElementById("login-pass").value;

    if(email === "" || pass === ""){
        showPopup("Please fill all fields");
        return;
    }

    let found = false;
    for(let i = 0; i < validEmails.length; i++){
        if(email === validEmails[i] && pass === validPasses[i]){
            found = true;
            break;
        }
    }

    if(found){
        showPopup("Login Successful ");
        document.getElementById("login-form").reset();
    } else {
        showPopup("Invalid email or password");
    }
}

function registerUser(event){
    event.preventDefault();
    let name = document.getElementById("reg-name").value;
    let email = document.getElementById("reg-email").value;
    let pass = document.getElementById("reg-pass").value;

    if(name === "" || email === "" || pass === ""){
        showPopup("Please complete all fields");
    }
    else if(pass.length < 6){
        showPopup("Password must be at least 6 characters");
    }
    else{
        showPopup("Account Created Successfully ");
        document.getElementById("register-form").reset();
        showLogin();
    }
}

function validateReset(event){
    event.preventDefault();
    let email = document.getElementById("reset-email").value;

    if(email === ""){
        showPopup("Enter your email");
    } else {
        showPopup("Reset link sent ");
        document.getElementById("forgot-form").reset();
    }
}

function showPopup(message){
    document.getElementById("popup-text").innerText = message;
    document.getElementById("popup").classList.add("show");
}

function closePopup(){
    document.getElementById("popup").classList.remove("show");
}