

//TENTE USAR O ForEach NESSA PORCARIA.



function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == 'usuarioteste@connectpet.com' && senha == '54321'){
        location.href = "../../HTML_final/inicio.html"
    }else{
        alert('Usuário ou senha incorretos');
    }
}


// const users = [

//     {
//         login: "francine.usuarioteste@connectpet.com",
//         pass: "francine"
//     },
//     {
//         login: "ingrid.usuarioteste@connectpet.com",
//         pass: "ingrid"
//     },
//     {
//         login: "eliezer.usuarioteste@connectpet.com",
//         pass: "eliezer"
//     },
//     {
//         login: "maran.usuarioteste@connectpet.com",
//         pass: "maran"
//     },
//     {
//         login: "lucas.usuarioteste@connectpet.com",
//         pass: "lucas"
//     }

// ]




//function logar(){


/*
var senhaUser = document.getElementById('senha').value;

const validacao = users.find((data) =>{
    if(data.login == emailUser){
        alert('Uhhhuuulll email deu boa, gurizao...')
    }else{
        alert('Deu boa não, Ludmilo...')
         
    }
    
})

}


/*

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



const users = [

    {
        login: "francine.usuarioteste@connectpet.com",
        pass: "francine"
    },
    {
        login: "ingrid.usuarioteste@connectpet.com",
        pass: "ingrid"
    },
    {
        login: "eliezer.usuarioteste@connectpet.com",
        pass: "eliezer"
    },
    {
        login: "maran.usuarioteste@connectpet.com",
        pass: "maran"
    },
    {
        login: "lucas.usuarioteste@connectpet.com",
        pass: "lucas"
    }

];

var email = document.getElementById('email')[0].value;
var senha = document.getElementById('senha')[0].value;



function logar(){

    const users = [

        {
            login: "francine.usuarioteste@connectpet.com",
            pass: "francine"
        },
        {
            login: "ingrid.usuarioteste@connectpet.com",
            pass: "ingrid"
        },
        {
            login: "eliezer.usuarioteste@connectpet.com",
            pass: "eliezer"
        },
        {
            login: "maran.usuarioteste@connectpet.com",
            pass: "maran"
        },
        {
            login: "lucas.usuarioteste@connectpet.com",
            pass: "lucas"
        }
    
    ];

    var email = document.getElementById('email')[0].value;
    var senha = document.getElementById('senha')[0].value;

    for(var i = 0; i < users.length; i++){
        
        if(email === users[i].login && senha === users[i].pass){
            alert('tudo OK'); 
            break;
        };
    };
};
*/



// const users = [

//     {
//         login: "francine.usuarioteste@connectpet.com",
//         pass: "francine"
//     },
//     {
//         login: "ingrid.usuarioteste@connectpet.com",
//         pass: "ingrid"
//     },
//     {
//         login: "eliezer.usuarioteste@connectpet.com",
//         pass: "eliezer"
//     },
//     {
//         login: "maran.usuarioteste@connectpet.com",
//         pass: "maran"
//     },
//     {
//         login: "lucas.usuarioteste@connectpet.com",
//         pass: "lucas"
//     }

// ];


// var email = "francine.usuarioteste@connectpet.com";
// var senha = "francine";



// function logar(){
//     for(var i = 0; i < users.length; i++){
        
//         if(email === users[i].login && senha === users[i].pass){
//             console.log('tudo OK')
//             //location.href = "../../HTML_final/inicio.html"; 
//             break
//         }else{
//             console.log('Usuário ou senha incorretos'); 
//         }
        
//     }
// };

// logar();









/*
function logar(){
    for(let i in users){ 
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;

    

        if(email == users[i].login && senha == users[i].pass){
            location.href = "../../HTML_final/inicio.html";
            break
        }else{
            alert('Usuário ou senha incorretos');
            break
        }
    }
}
*/