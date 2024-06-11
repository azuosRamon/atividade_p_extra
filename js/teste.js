let carrosseis = document.getElementsByClassName('slideContainer');

for(let i = 0; i < 1; i++){
    let carrossel = carrosseis[i];
    let botao_anterior = carrossel.getElementsByClassName('anterior');
    let botao_proximo = carrossel.getElementsByClassName('proximo');

    let itens = carrossel.getElementsByClassName('item');
    let posicaoAnterior = 0;
    let mover = posicaoAnterior + 25;

    botao_proximo.addEventListener('click', ()=>{
        mover = posicaoAnterior + 25;
        
        for(let x = 0; x < itens.length; x++){
            itens[x].style.right = mover + '%';

            posicaoAnterior = mover;
        }
    })
    botao_anterior.addEventListener('click', ()=>{
        mover = posicaoAnterior - 25;
        
        for(let x = 0; x < itens.length; x++){
            itens[x].style.right = mover + '%';

            posicaoAnterior = mover;
        }
    })
}