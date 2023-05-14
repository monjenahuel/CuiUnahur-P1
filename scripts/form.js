let form = document.getElementById("formRegister");
let inputs = form.querySelectorAll("input");
let joinUsButton = document.getElementById("joinUsButton");

document.addEventListener("input", () => {

    let arrayDeValoresInput = []

    inputs.forEach((input) => {
        arrayDeValoresInput.push(input.value)
    });

    
    let todosCompletos = arrayDeValoresInput.every(function (elemento) {
        return elemento != "";
    });

    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let emailValido = emailRegex.test(document.getElementById("email").value)


    if (todosCompletos && emailValido) {
        joinUsButton.disabled = false
    } else {
        joinUsButton.disabled = true
    }
});

//Join us Button

joinUsButton.addEventListener("click", () => {
    event.preventDefault();

    let profEmail = "gabriel.molina@unahur.edu.ar";
    let subject = "Event Registration";

    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById("lastname");
    let company = document.getElementById("company");
    let email = document.getElementById("email");

    let body = `First Name: ${firstName.value} %0A Last Name: ${lastName.value} %0A Company: ${company.value} %0A Email: ${email.value}`;

    let mailto =
        "mailto:" + profEmail + "?subject=" + subject + "&body=" + body;

    window.location.href = mailto;
});
