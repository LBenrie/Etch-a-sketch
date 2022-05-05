// our variables 

const grid = document.querySelector('.container');
const btnblack = document.querySelector('.blackColor');
const btnrandom = document.querySelector('.randomColor');
const btnclear = document.querySelector('.clear');
const checkBox = document.querySelector('.colorBox');
const sizer = document.querySelector('.size');
const cRed = document.querySelector('.red');
const cBlue = document.querySelector('.blue');
const cGreen = document.querySelector('.green');
const start = document.querySelector('.start');
const pRed = document.querySelector('.RedN');
const pBlue = document.querySelector('.BlueN');
const pGreen = document.querySelector('.GreenN');

let size = 16;
let red = 0;
let blue = 0;
let green = 0;
let black = false;
let random = false;
let onGrid = false;

// our reaction 

btnblack.addEventListener('click', e => {
    black = true;
    random = false;
    resetColor();
});

btnrandom.addEventListener('click', e => {
    black = false;
    random = true;
    resetColor();
});

start.addEventListener('click', e =>{
    if (black === true){
        colorBlack();
        creatGrid();
    } else if (random === true){
        resetColor();
        creatGrid();
    }   else {
        creatGrid();
    }
});

btnclear.addEventListener('click', e => {
    removegrid(grid);
});

sizer.addEventListener('input', e => {
    size = document.querySelector('.size').value;
    document.querySelector('.sizeV').innerText = size;
});

cRed.addEventListener('input', e => {
    red = document.querySelector('.red').value;
    pRed.innerText = red;
    black = false;
    random = false;
});

cBlue.addEventListener('input', e => {
    blue = document.querySelector('.blue').value;
    pBlue.innerText = blue;
    console.log(blue);
    black = false;
    random = false;
}); 

cGreen.addEventListener('input', e => {
    green = document.querySelector('.green').value;
    pGreen.innerText = green;
    console.log(green);    
    black = false;
    random = false;
});

//our functions

 function colorBlack (){
    red = 0;
    blue = 0;
    green = 0;
    document.querySelector('.red').value = red;
    document.querySelector('.blue').value = blue;
    document.querySelector('.green').value = green;
 };

 function colorRandom (){
    red = Math.floor(Math.random()*255);
    blue = Math.floor(Math.random()*255);
    green = Math.floor(Math.random()*255);
 };

 function allClear (){

 };

 function colorPick (){
    red = document.querySelector('.red').value;
    blue = document.querySelector('.blue').value;
    green = document.querySelector('.green').value;
 };

 function creatGrid (){
    if (onGrid === false) {
        for (let i = 0; i < size * size; i++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add('grid');
            gridElement.style.cssText = "border: 1px dashed rgba(200, 200, 200, 0.7)"
            grid.appendChild(gridElement);
            grid.style.cssText = `grid-template-columns: repeat(${size}, 2fr); grid-template-rows: repeat(${size}, 2fr);`;
            gridElement.addEventListener('mouseenter', changeColor)
        }
        onGrid = true;
    } else if (onGrid === true){
        removegrid(grid);
        onGrid = false;
    }
};

function removegrid(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
};

function changeColor(e){
    console.log('color change')
    if (black === true){
        e.target.style.cssText = `background-color: rgb(${red}, ${green}, ${blue})`;
    } else if (random === true){
        colorRandom();
        e.target.style.cssText = `background-color: rgb(${red}, ${green}, ${blue})`;
    }   else {
        e.target.style.cssText = `background-color: rgb(${red}, ${green}, ${blue})`;
    }
}

function resetColor(){
    red = 0;
    blue = 0;
    green =0;
}