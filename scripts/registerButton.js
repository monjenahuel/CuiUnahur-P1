let registerButton = document.getElementById("registerButton")
let currentURL = window.location.pathname;


if(window.location.pathname === "/CuiUnahur-P1/register.html"){
    registerButton.innerText = "Home"
    registerButton.addEventListener("click", () => {
        window.location.href = "/CuiUnahur-P1";
    })
}else{
    registerButton.innerText = "Register"
    registerButton.addEventListener("click", () => {
        window.location.href = "/CuiUnahur-P1/register.html";
    })
}
