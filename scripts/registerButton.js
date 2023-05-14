let registerButton = document.getElementById("registerButton")
let currentURL = window.location.pathname;


if(window.location.pathname === "/register.html"){
    registerButton.innerText = "Home"
    registerButton.addEventListener("click", () => {
        window.location.href = "/index.html";
    })
}else{
    registerButton.innerText = "Register"
    registerButton.addEventListener("click", () => {
        window.location.href = "/register.html";
    })
}
