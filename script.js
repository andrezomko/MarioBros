const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');



// FUNCAO PARA EXECUTAR O PULO DO MARIO
const jump = () => {
    mario.classList.add('jump')    //adicionando classe jump na class mario

  setTimeout(() => {
    mario.classList.remove('jump')}, 500);  //removendo a class jump da class mario
}

//apertar um tecla aciona o pulo:
document.addEventListener('keydown',jump) 


// FUNCAO PARA AS POSICOES dos elementos html (pipe,mario e nuvem)
const loop = setInterval(() => { 
    
//salva a posicao do pipe na const pipePosition (em relacao à vertical):
    const pipePosition = pipe.offsetLeft;
//salva a posicao do Mario na const marioPosition (em relacao à horizontal):
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')//o + converte string para numero
//salva a posicao das nuvens na const
    const cloudsPosition = clouds.offsetLeft


//LOGICA P O GAME OVER:
    if(pipePosition <= 120 && pipePosition > 0  && marioPosition < 100){ //ao chegar em 120 para.
        pipe.style.animation = 'none';   //retirando a animacao do pipe - pausa o pipe
        pipe.style.left = `${pipePosition}px`; //deixa o pipe na posicao que parou ao game over

//parando o mario na hora e posicao que encosta no pipe
        mario.style.animation = 'none'; //para o pipe
        mario.style.bottom = `${marioPosition}px`;//deixa o pipe na posicao em que parou

//mudando o mario para o mario morto
        mario.src = './img/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

// parando as nuvens
        clouds.style.animation='none';
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop)
    } 
 }, 10);

 



