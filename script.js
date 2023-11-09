const passwordField = document.getElementById("pass");
const digits = document.getElementById("dig")
const caracMIN = document.getElementById("min")
const caracMAI = document.getElementById("mai")
const caracESP = document.getElementById("esp")
const submitButton = document.getElementById("submit-button");
verif_btn = document.querySelector('.verif')


// Adiciona um ouvinte de evento para verificar o campo de senha
passwordField.addEventListener("blur", function () {
    const password = passwordField.value;

    // comprimento
    const lengthCheck = password.length >= 8;

    // maiuscula
    const uppercaseCheck = /[A-Z]/.test(password);

    // minuscula
    const lowercaseCheck = /[a-z]/.test(password);

    // um caracter especial
    const specialCharacterCheck = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

    // Ativar o botão de envio somente se todos os critérios forem atendidos
    if (lengthCheck && uppercaseCheck && lowercaseCheck && specialCharacterCheck) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }    
    
    //se eles não foram o que foi demarcado acima fica vermelha
    if (!lengthCheck || !uppercaseCheck || !lowercaseCheck || !specialCharacterCheck) {
        passwordField.style.borderColor = "red";
    
    // se não, fica normal.
    } else {
        passwordField.style.borderColor = "#ccc"; // Restaura a cor padrão
    }
    // Mudando cor texto DIGITS
    if(!lengthCheck) {
        digits.style.color = "red";
    } else {
        digits.style.color = "#ccc";
    }

    //Mudando cor texto minusculo
    if (!lowercaseCheck) {
        caracMIN.style.color = "red";
    } else {
        caracMIN.style.color = "#ccc";
    }

    //Mudando cor texto maiusculo
    if (!uppercaseCheck) {
        caracMAI.style.color = "red"
    } else {
        caracMAI.style.color = "#ccc"
    }

    //Mudando cor texto especial
    if (!specialCharacterCheck) {
        caracESP.style.color = "red"
    } else {
        caracESP.style.color = "#ccc"
    }
});

verif_btn.onclick = function() {
    this.innerHTML = "<div class='loader'></div>";
}
