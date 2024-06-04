const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');


    setTimeout(() => {

        mario.classList.remove('jump');  

    }, 500);

}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const paintPosition = windows.getComputedStyle(paint).bottom;
  console.log(paintPosition)

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100){
    pipe.style.animation = 'none';
    pipe.style.left=`${pipePosition}px`;
    
}




},10);



document.addEventListener("keydown", jump)
