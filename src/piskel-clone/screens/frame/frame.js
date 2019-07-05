import { mainCanvas, canvas } from '../tools/tools';

let counter = 1;
let imgData;
const add = document.querySelector('.add');
const frameBox = document.querySelector('.frame--box');
const frameCanvasId = document.getElementById('frameCanvasId');
const animationCanvasAll = document.getElementById('animationCanvas');
let canvasFrame = document.querySelector('.canvas--counter');
let ctxFrame = canvasFrame.getContext('2d');
const counterCanvas = [ctxFrame];
const frameMurkup = () => `<div class="frame frame--counter${counter}">
<input  disabled type="button" class="counter" value=${counter} />
<canvas id="frameCanvasId" class="frameCanvas canvas--counter${counter}" width="32" height="32"></canvas>
<div class="copy copy--counter${counter}"></div>
<div class="del del--counter${counter}"></div>
</div>`;
const listItem = document.getElementById('listItem');
let sizeCanvas = 32;

mainCanvas.height = sizeCanvas;
mainCanvas.width = sizeCanvas;
frameCanvasId.height = sizeCanvas;
frameCanvasId.width = sizeCanvas;
animationCanvasAll.width = sizeCanvas;
animationCanvasAll.height = sizeCanvas;
listItem.onchange = function input() {
  sizeCanvas = this.value;
  mainCanvas.height = sizeCanvas;
  mainCanvas.width = sizeCanvas;
  animationCanvasAll.width = sizeCanvas;
  animationCanvasAll.height = sizeCanvas;
  const frameCanvasAllCheck = document.querySelectorAll('.frameCanvas');
  for (let item = 0; item < frameCanvasAllCheck.length; item += 1) {
    frameCanvasAllCheck[item].height = this.value;
    frameCanvasAllCheck[item].width = this.value;
  }
  return sizeCanvas;
};
const clickFrame = () => {
  counter += 1;
  add.insertAdjacentHTML('beforebegin', frameMurkup());
};
const firstCopyCanvas = () => {
  imgData = canvas.getImageData(0, 0, mainCanvas.width, mainCanvas.height);
  ctxFrame.putImageData(imgData, 0, 0);
};
const copyCanvas = () => {
  let counterCanvasFrame = 1;
  canvas.clearRect(0, 0, 450, 450);
  const frameCanvasAll = document.querySelectorAll('.frameCanvas');
  for (let item = 0; item < frameCanvasAll.length; item += 1) {
    frameCanvasAll[item].className = `frameCanvas canvas--counter${counterCanvasFrame}`;
    counterCanvasFrame += 1;
  }
  canvasFrame = document.querySelector(`.canvas--counter${counter}`);
  ctxFrame = canvasFrame.getContext('2d');
  counterCanvas.push(ctxFrame);
  return (counterCanvas, ctxFrame);
};
const delFrame = (e) => {
  let firstFrame = 1;
  if (e.target.classList.contains('del')) {
    let child = e.target.parentNode.firstElementChild.value;
    child -= 1;
    counterCanvas.splice(child, 1);
    e.target.parentNode.remove();
    const check = document.querySelectorAll('.counter');
    for (let item = 0; item < check.length; item += 1) {
      check[item].value = firstFrame;
      firstFrame += 1;
    }
    counter -= 1;
  }
  return (counterCanvas, counter);
};

const copyFrame = (e) => {
  if (e.target.classList.contains('copy')) {
    let firstFrame = 1;
    const childCopy = e.target.parentNode.firstElementChild.value;
    const ctxCurrent = e.target.previousElementSibling.getContext('2d');
    counter += 1;
    e.target.parentNode.insertAdjacentHTML('afterend', frameMurkup());
    canvasFrame = document.querySelector(`.canvas--counter${counter}`);
    ctxFrame = canvasFrame.getContext('2d');
    imgData = ctxCurrent.getImageData(0, 0, frameCanvasId.width, frameCanvasId.height);
    canvas.putImageData(imgData, 0, 0);
    ctxFrame.putImageData(imgData, 0, 0);
    const check = document.querySelectorAll('.counter');
    for (let item = 0; item < check.length; item += 1) {
      check[item].value = firstFrame;
      firstFrame += 1;
      counterCanvas.splice(childCopy, 0, ctxFrame);
    }
  }
};
add.addEventListener('click', clickFrame);
add.addEventListener('click', copyCanvas);
mainCanvas.addEventListener('click', firstCopyCanvas);
frameBox.addEventListener('click', delFrame);
frameBox.addEventListener('click', copyFrame);

export { counterCanvas, frameCanvasId };
