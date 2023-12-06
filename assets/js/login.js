function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == 'usuarioteste@connectpet.com' && senha == 'lkjhgfdsa'){
        alert('sucesso');
        location.href = "../../HTML_final/inicio.html"
    }else{
        alert('Usuário ou senha incorretos');
    }
}