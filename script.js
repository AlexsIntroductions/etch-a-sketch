var currColor = 'black';
const size = 16;
const allColors = new Array("white", "black", "green", "red", "blue", "yellow", "lime", "purple", "pink", "gray");

function Initialize(size){
    const container = document.querySelector('.container');
    const per = (100/size) + '%';
    for(i = 0; i < Math.pow(size, 2); i++){
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.height = per;
        block.style.width = per;
        block.addEventListener('mouseover', () => block.style.backgroundColor = currColor)
        container.appendChild(block);
    }
}

function ColorInit(value, index, array){
    const colorUI = document.querySelector('.colorUI');
    const colorButton = document.createElement('div');
    colorButton.classList.add('colorButton');
    colorButton.style.backgroundColor = value;
    colorButton.addEventListener('click', () => ColorChange(value));
    colorUI.appendChild(colorButton);
}

function Reset(){
    const container = document.querySelector('.container');
    container.childNodes.forEach((block) => {
        block.style.backgroundColor = 'white';
    });
}

function Delete(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function Resize(){
    const container = document.querySelector('.container');
    Delete(container);
    Initialize(window.prompt("How big would you like the grid to be?", size));
}

function ColorChange(newColor){
    currColor = newColor;
    document.querySelector('.colorPrint').textContent = 'Current Color: \n' + currColor;
    console.log(currColor);
}

Initialize(size);
allColors.forEach(ColorInit);
document.querySelector('.colorPrint').textContent = 'Current Color: ' + currColor;