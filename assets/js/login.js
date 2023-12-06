/*
const users = [

    {
        login: 'francine.usuarioteste@connectpet.com',
        pass: 'francine'
    },
    {
        login: 'ingrid.usuarioteste@connectpet.com',
        pass: 'ingrid'
    },
    {
        login: 'eliezer.usuarioteste@connectpet.com',
        pass: 'eliezer'
    },
    {
        login: 'maran.usuarioteste@connectpet.com',
        pass: 'maran'
    },
    {
        login: 'lucas.usuarioteste@connectpet.com',
        pass: 'lucas'
    }

];

let entrar = document.getElementById('btnEntrar');

entrar.addEventListener('click', function logar(){

    let emailUser = document.getElementById('email').value;
    let senhaUser = document.getElementById('senha').value;
    let validarLogin = false;

    for(let i in users){

        if(emailUser == users[i].login && senhaUser == users[i].pass){
            validarLogin = true
            break 
        }
    }
    
    if(validarLogin == true){
        location.href = '../../HTML_final/inicio.html';
    }else{
        alert('usuário e senha incorretos')
    }

})

*/

function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == 'usuarioteste@connectpet.com' && senha == '54321'){
        location.href = "../../HTML_final/inicio.html"
    }else{
        alert('Usuário ou senha incorretos');
    }
}