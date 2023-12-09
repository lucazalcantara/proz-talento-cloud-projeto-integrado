function showHide(id){
    let conteudo = document.querySelector(id);
    conteudo.classlist.toggle('ativo');
}






// function alternar(elemento){
//     var display = document.getElementById(elemento).style.display;

//     if(display == "none"){
//         document.getElementById(elemento).style.display = 'grid';
//     }else{
//         document.getElementById(elemento).style.display = 'none'; 
//     }
    
// }





// function abrirPag(a){
//     let localPag = document.querySelector('paginas')
//     let pag = new XMLHttpRequest()

//     pag.onreadystatechange = () =>{
//         if(pag.readyState == 4 && pag.status == 200){
//             localPag.innerHTML = pag.response
//         }
//     }

//     pag.open('GET', `../../HTML_auxiliares/${a}.html`)
//     pag.send('perfil.html');
// }













// function alteraDisplay(){
//     var display = document.querySelectorAll('.item-perfil');

//     display.forEach((item)=> {
//         item.classList.remove('-ativo')
//     })
//     this.classList.add('-ativo')
// }

// var clique = document.querySelectorAll('.field')

// clique.forEach((item)=>
//     item.addEventListener('click', alteraDisplay)
// )





// var display = document.querySelectorAll('.item-perfil');

// function selectLink(){
//     display.forEach((item)=> {
//         item.classList.remove('ativo')
//     })
//     this.classList.add('ativo')
// }

// var ativador = document.querySelectorAll('.field');

// ativador.forEach((item)=>
//     item.addEventListener('click', selectLink)
// )



// function alternar(elemento){
//     var display = document.getElementById(elemento).style.display;

//     if(display == "none"){
//         document.getElementById(elemento).style.display = 'grid';
//     }else{
//         document.getElementById(elemento).style.display = 'none'; 
//     }
    
// }




// function alternar(elemento){
//     var display = document.getElementById(elemento).style.display;

//     if(display == "none"){
//         document.getElementById(elemento).style.display = 'grid';
//         document.querySelectorAll('.item-perfil').style.display = 'none';
//     }
    
// }



// var listasLi = document.querySelectorAll('.item-perfil').style.display;

// for(let i in listasLi){
//     if(listasLi[i] === 'grid'){
//         listasLi - this.listasLi[i] == 'none';
//     }
// }






// var perfilItem = document.querySelectorAll('.item-perfil');

// function selectLink(){
//     perfilItem.forEach((item)=>
//         item.classList.remove('ativo')
//     )
//     this.classList.add('ativo')
// }

// perfilItem.forEach((item)=>
//     item.addEventListener('click', selectLink)
// )


