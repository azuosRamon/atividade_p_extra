

const menu = document.getElementById("nav");
const top_menu = menu.offsetTop;
console.log(top_menu);

var slide = document.getElementsByClassName('slideContainer');
//console.log(slide.length)

let itens = document.getElementsByClassName('item');
let qtd_img = itens.length
let itens_2 = document.querySelectorAll('div.item');
let anterior = document.getElementsByClassName('anterior');
let proximo = document.getElementsByClassName('proximo');

slide_conf();

function slide_conf(){
    itens_2.forEach( (item) => {
        item.style.width = 100/qtd_img + '%';
    });
    document.getElementById('slide').style.width = qtd_img*100 + '%';
    //console.log(itens[0]);
    //itens.style.backgroundColor = "#fa4";
}


var x = 0;

function proximo_slide(){
    x++;
    if (x > (qtd_img - 1)) {
        x = 0;
    }
    var mover = -(100/qtd_img) * x;
    //console.log(mover);
    itens[0].style.marginLeft = mover + '%';
    
}
function anterior_slide(){
    x--;
    if (x < 0) {
        x = qtd_img - 1;
    }
    var mover = -(100/qtd_img) * x;
    //console.log(mover);
    itens[0].style.marginLeft = mover + '%';
    
}
setInterval(()=>{
    proximo_slide();
    //console.log('x=' + x);
    console.log(window.screenY);
}, 5000)


anterior[0].addEventListener("click", () => {
    anterior_slide();
 })
proximo[0].addEventListener("click", () => {
   proximo_slide();
})

//posição da seta
var pos_slide = document.getElementById('slideContainer');
var seta = document.getElementsByClassName("seta");


function calculoTop(){
    if(window.scrollY >= top_menu){
        menu.classList.add('class', 'fixar');
    } else {
        menu.classList.remove('fixar');
    }
    //AJUSTANDO A POSICAO DA SETA DO SLIDE AUTOMATICAMENTE
    if (window.scrollY > 0) {
        var top_slide = pos_slide.offsetTop - window.scrollY;
    } else {
        var top_slide = pos_slide.offsetTop;
    }
    for (let u = 0; u < seta.length; u++){

        //seta[u].style.top = ((top_slide + pos_slide.offsetHeight/2)-seta[u].offsetHeight/2  + 'px');
    }
    menu_toggle.style.top = window.scrollY + 'px';
}


var b_remover = document.getElementById('botao_remover');
b_remover.addEventListener("click", ()=>{remover_pagina()});
var b_adicionar = document.getElementById('botao_adicionar');
b_adicionar.addEventListener("click", ()=>{criar_pagina()});

var message = document.getElementById('fim_slide');

function criar_pagina(){
    if (qtd_img + 1 < 16){
        const novo_slide = document.createElement("div");
        novo_slide.innerText = qtd_img + 1;
        novo_slide.classList.add('item');
        var div_slide = document.getElementById('slide');
        div_slide.appendChild(novo_slide);
        itens = document.getElementsByClassName('item');
        qtd_img = itens.length
        itens_2 = document.querySelectorAll('div.item');
        slide_conf();
        message.innerHTML = "Página " + (qtd_img) + " adicionada com sucesso!";
        
    } 
    else {
        message.innerText = "Numero máximo de páginas alcançado!";
    }
    var resposta = setTimeout(()=>{message.innerHTML = '';}, 5000);
    //clearInterval(resposta);
}

function remover_pagina(){
    if(qtd_img > 3){
    itens = document.getElementsByClassName('item');
    qtd_img = itens.length
    document.getElementById('slide').removeChild(itens[qtd_img-1]);
    itens = document.getElementsByClassName('item');
    qtd_img = itens.length
    itens_2 = document.querySelectorAll('div.item');
    slide_conf();
    message.innerHTML = "Página " + (qtd_img + 1) + " removida com sucesso!";
    } 
    else {
        message.innerText = "Numero mínimo de páginas alcançado!";
    }
    var resposta = setTimeout(()=>{message.innerHTML = '';}, 5000);
}


var btnabre = document.getElementById('botao-menu');
btnabre.addEventListener("click", ()=>{
    abre_menu();
})
var btnfecha = document.getElementById('x-fecha-menu');
btnfecha.addEventListener("click", ()=>{
    fecha_menu();
})

var menu_toggle = document.getElementById('background-menu-responsivo');

function abre_menu(){
    menu_toggle.classList.remove('desativa-menu');
    menu_toggle.classList.add('ativa-menu');
    menu_toggle.style.display = 'block';
}
function fecha_menu(){
    menu_toggle.classList.remove('ativa-menu');
    menu_toggle.classList.add('desativa-menu');
    menu_toggle.style.display = 'none';
}

window.scrollTo(0,1);