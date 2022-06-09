const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const cloud = document.querySelector('.clouds')

const jump = () => {
    mario.classList.add('jump')
    
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 700)
}

addEventListener('keydown', jump)

 const loop = setInterval(() => {
     const pipePosition = pipe.offsetLeft;
     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
     const cloudPosition = cloud.offsetLeft;
     if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 95) {
         pipe.style.animation = 'none';
         pipe.style.left = `${pipePosition}px`;

         mario.style.animation = 'none';
         mario.style.bottom = `${marioPosition}px`;

         cloud.style.animation ='none';
         cloud.style.left = `${cloudPosition}px`


         mario.src = './images/game-over.png'
         mario.style.width = '75px'
         mario.style.marginLeft = '50px'

         clearInterval(loop)
     }
 })
 
 
 
 