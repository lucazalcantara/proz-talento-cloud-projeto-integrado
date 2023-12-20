const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('password-two')
const petnome = document.getElementById('petnome')
const petidade = document.getElementById('petidade')
const petespecie = document.getElementById('pet')
const sexopet = document.getElementById('sexopet')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()

})

function checkInputs() {

    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()
    const petnomeValue = petnome.value.trim()
    const petidadeValue = petidade.value.trim()
    const petespecieValue = petespecie.value.trim()
    const sexopetValue = sexopet.value.trim()

    if(usernameValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(username, 'Preencha esse campo')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(username)
        
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
        return false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email);
        
    }
   
    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo');
        return false;

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres');
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }

    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo');
        return false;

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não estão iguais');
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordtwo)
    }

    if(petnomeValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(petnome, 'Preencha esse campo')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(petnome) 
    }

    if(petidadeValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(petidade, 'Preencha esse campo')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(petidade) 
    }

    if(petespecieValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(pet, 'Preencha esse campo')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(pet) 
    }

    if(sexopetValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(sexopet, 'Preencha esse campo')
        return false;
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(sexopet) 
    }



    return true;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}




























function isEmail(email) {
    return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}



function cadastrar(){
    if(checkInputs()){
        location.href = "../../HTML_final/inicio.html";
    }else{
        return false;
    }
}





































































// const form = document.querySelector("#form");
// const nome = document.querySelector("#nome");
// const sobrenome = document.querySelector("#sobrename");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const confirmPass = document.querySelector("#confirmpassword");
// const petNome = document.querySelector("#petnome");
// const petIdade = document.querySelector("#petidade");
// const especiePet = document.querySelector("#pet");
// const sexoPet = document.querySelector("#sexopet");
// // const cadastrar = document.querySelector("#btnEntrar");


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
  
//     validarCampos();
  
// });

// function validarCampos(){

//     if(nome.value === ""){
//         alert("Por favor, preencha o seu nome.");
//         return false;
//     }

//     if(sobrenome.value === ""){
//         alert("Por favor, preencha o seu sobrenome.");
//         return false;
//     }

//     if(email.value === "" || !isEmailValid(email.value)){
//         alert("Por favor, preencha o seu email.");
//         return false;
//     }

//     if(!validatePassword(password.value, 8)){
//         alert("A senha precisa conter no mínimo 8 dígitos.");
//         return false;
//     }

//     if(confirmPass.value === ""){
//         alert("Por favor, preencha o campo 'Confirme sua senha'")
//         return false;
//     }else if(confirmPass.value !== password.value){
//         alert("A senha deve ser a mesma digitada no campo 'Senha'");
//         return false;
//     }

//     if(petNome.value === ""){
//         alert("Por favor, preencha o nome do seu pet");
//         return false;
//     }

//     if(petIdade.value === ""){
//         alert("Por favor, preencha a idade do seu pet");
//         return false;
//     }

//     if(especiePet.value === ""){
//         alert("Por favor, selecione a espécie do seu pet.")
//         return false;
//     }

//     if(sexoPet.value === ""){
//         alert("Por favor, informe o sexo do seu pet")
//         return false;
//     }

//     return true
// };

// function isEmailValid(e){
//     const emailRegex = new RegExp(
//         /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
//     );

//     if(emailRegex.test(e)){
//         return true;
//     }

//     return false;
// }

// function validatePassword(pass, minDigits){
//     if(pass.length >= minDigits){
//         return true;
//     }

//     return false;
// }



// function cadastrar(){
//     if(validarCampos()){
//         location.href = "../../HTML_final/inicio.html"
//     }else{
//         return false;
//     }
// }













// // form.addEventListener("submit", (event) => {
// //     event.preventDefault();

// //     if(nome.value === ""){
// //         alert("Por favor, preencha o seu nome.");
// //         return;
// //     }

// //     if(sobrenome.value === ""){
// //         alert("Por favor, preencha o seu sobrenome.");
// //         return;
// //     }

// //     if(email.value === "" || !isEmailValid(email.value)){
// //         alert("Por favor, preencha o seu email.");
// //         return;
// //     }

// //     if(!validatePassword(password.value, 8)){
// //         alert("A senha precisa conter no mínimo 8 dígitos.");
// //         return;
// //     }

// //     if(confirmPass.value === ""){
// //         alert("Por favor, preencha o campo 'Confirme sua senha'")
// //     }else if(confirmPass.value !== password.value){
// //         alert("A senha deve ser a mesma digitada no campo 'Senha'");
// //         return;
// //     }

// //     if(petNome.value === ""){
// //         alert("Por favor, preencha o nome do seu pet");
// //         return;
// //     }

// //     if(petIdade.value === ""){
// //         alert("Por favor, preencha a idade do seu pet");
// //         return;
// //     }

// //     if(especiePet.value === ""){
// //         alert("Por favor, selecione a espécie do seu pet.")
// //         return;
// //     }

// //     if(sexoPet.value === ""){
// //         alert("Por favor, informe o sexo do seu pet")
// //         return;
// //     }

// //     form.submit();
// // });

// // function isEmailValid(e){
// //     const emailRegex = new RegExp(
// //         /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
// //     );

// //     if(emailRegex.test(e)){
// //         return true;
// //     }

// //     return false;
// // }

// // function validatePassword(pass, minDigits){
// //     if(pass.length >= minDigits){
// //         return true;
// //     }

// //     return false;
// // }


























// // const form = document.querySelector("#form");
// // const firstName = document.querySelector("#firstname");
// // const lastName = document.querySelector("#lastname");
// // const email = document.querySelector("#email");
// // const phone = document.querySelector("#number");
// // const password = document.querySelector("#password");
// // const confirmPassword = document.querySelector("#confirmpassword");

// // form.addEventListener("submit", (event) => {
// //     event.preventDefault();

// //     if(firstName.value === ""){
// //         alert("Por favor, digite o seu nome");
// //         return;
// //     }

// //     if(lastName.value === ""){
// //         alert("Por favor, digite o seu sobrenome");
// //         return;
// //     }

// //     if(email.value === "" || !isEmailValid(email.value)){
// //         alert("Por favor, preencha o seu email");
// //         return;
// //     }

// //     if(!validatePhone(phone.value, 10)){
// //         alert("Por favor, insira um número válido com DDD");
// //         return;
// //     }

// //     if(!validatePassword(password.value, 8)){
// //         alert("A senha precisa conter no mínimo 8 dígitos");
// //         return;
// //     }

// //     if(confirmPassword.value === ""){
// //         alert("Por favor, preencha o campo 'Confirme sua senha'")
// //     }else if(confirmPassword.value !== password.value){
// //         alert("A senha deve ser a mesma digitada no campo 'Senha'");
// //         return;
// //     }


// //     form.submit();
// // });


// // function isEmailValid(e){
// //     const emailRegex = new RegExp(
// //         /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
// //     );

// //     if(emailRegex.test(e)){
// //         return true;
// //     }

// //     return false;
// // }

// // function validatePassword(pass, minDigits){
// //     if(pass.length >= minDigits){
// //         return true;
// //     }

// //     return false;
// // }

// // function validatePhone(num, minDig){
// //     if(num.length >= minDig){
// //         return true;
// //     }

// //     return false;
// // }
