import { counterCanvas, frameCanvasId } from '../frame/frame';

const elem = document.querySelector('input[type="range"]');
const addAnimation = document.querySelector('.add');
let newValue = 4;
let animationImage = 0;
let imgAnimation;
let timer;

const startAnimation = () => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (animationImage < counterCanvas.length) {
      const animationCanvas = document.getElementById('animationCanvas');
      const animationCanvasCtx = animationCanvas.getContext('2d');
      animationCanvasCtx.clearRect(0, 0, 450, 450);
      imgAnimation = counterCanvas[animationImage]
        .getImageData(0, 0, frameCanvasId.width, frameCanvasId.height);
      animationCanvasCtx.putImageData(imgAnimation, 0, 0);
      animationImage += 1;
    } else {
      animationImage = 0;
    }
  }, 1000 / newValue);
  return timer;
};
const rangeValue = () => {
  newValue = elem.value;
  const target = document.querySelector('.valueInput');
  target.innerHTML = newValue;
  startAnimation();
};

const toggleFullScreen = () => {
  const animationCanvas = document.getElementById('animationCanvas');
  animationCanvas.requestFullscreen();
};
document.addEventListener('keypress', (e) => {
  const r = 82;
  if (e.keyCode === r) {
    toggleFullScreen();
  }
  return r;
}, false);

addAnimation.addEventListener('click', startAnimation);
elem.addEventListener('input', rangeValue);
