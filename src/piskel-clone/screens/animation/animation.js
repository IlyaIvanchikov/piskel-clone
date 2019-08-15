import { counterCanvas, frameCanvasId } from '../frame/frame';


const elem = document.querySelector('input[type="range"]');
const addAnimation = document.querySelector('.add');
const exportGif = document.querySelector('.exportGif');
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

const exportGifButton = () => {
  const encoder = new GIFEncoder();
  encoder.setRepeat(0);
  encoder.setDelay(500);
  encoder.start();
  for (let i = 0; i < counterCanvas.length; i += 1) {
    encoder.addFrame(counterCanvas[i]);
  }
  encoder.finish();
  encoder.download('canvas.gif');
};
exportGif.addEventListener('click', exportGifButton);
addAnimation.addEventListener('click', startAnimation);
elem.addEventListener('input', rangeValue);
