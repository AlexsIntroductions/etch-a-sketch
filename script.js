const currColor = 'black';
const size = 16;

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

function Resize(size){
    const container = document.querySelector('.container');
    Delete(container);
    Initialize(size);
}

Initialize(size);