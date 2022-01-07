let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - azul
//2 - amarelo
//3 - vermelho
//4 - laranja
//5 - marrom
//6 - rosa
//7 - roxo
//8 - preto

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const brown = document.querySelector('.brown');
const orange = document.querySelector('.orange');
const purple = document.querySelector('.purple');
const pink = document.querySelector('.pink');
const black = document.querySelector('.black');

//Sorteia cor
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 9);
    order[order.length] = colorOrder;
    clickedOrder = [];

    
    for(let i in order) {
        let elementColor = createElementColor(order[i]);
        lightColor(elementColor, Number(i)+1);
    }
}

//Acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number);
    setTimeout(()=>{
       element.classList.remove('selected'); 
    }, (number-250));
}

//checa se o clique foi feito na cor
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i]!= order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert('Pontuação: '+score+'\nVocê acertou! Iniciando o próximo nível!');
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElementColor(color).classList.add('selected');

    setTimeout(() => {
        createElementColor(color).classList.remove('selected');
        checkOrder();
    });   
}

//criar a a função que retorna a cor
let createElementColor = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return blue;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return red;
    } else if(color == 4){
        return orange;
    } else if(color == 5){
        return brown;
    } else if(color == 6){
        return pink;
    } else if(color == 7){
        return purple;
    } else if(color == 8){
        return black;
    }
}

//funcao para proximo nivel do jogo
let nextLevel = () => {
   shuffleOrder();
   score ++;  
}

//função para game over
let gameOver = () => {
    alert('Pontuação: '+score+'!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo!');
    order = [];
    clickedOrder = [];
    playGame();
}

//função de início do jogo
let playGame = () => {
    alert('Bem-vindo ao jogo Genius!');
    nextLevel();
    score = 0;
}

green.addEventListener('click', click(0));
green.onclick = () => click(0);
red.addEventListener('click', click(3));
red.onclick = () => click(3);
yellow.addEventListener('click', click(2));
yellow.onclick = () => click(2);
blue.addEventListener('click', click(1));
blue.onclick = () => click(1);
orange.addEventListener('click', click(4));
orange.onclick = () => click(4);
brown.addEventListener('click', click(5));
brown.onclick = () => click(5);
pink.addEventListener('click', click(6));
pink.onclick = () => click(6);
purple.addEventListener('click', click(7));
purple.onclick = () => click(7);
black.addEventListener('click', click(8));
black.onclick = () => click(8);

playGame();