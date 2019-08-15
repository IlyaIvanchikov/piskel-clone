const primaryColor = document.querySelector('.primaryColor');
let checkTools;
let imgDataRectangle;
const massiv = [];
const toolsAll = document.querySelector('.tools--all');
const mainCanvas = document.getElementById('mainCanvas');
const canvas = mainCanvas.getContext('2d');
const local = localStorage.getItem('key') || null;
if (local !== null) {
  const Image1 = new Image();
  Image1.src = local;
  Image1.onload = () => {
    canvas.drawImage(Image1, 0, 0);
  };
}
let rectangleX;
let rectangleY;
const opts = {
  color: 'black',
  radius: 1,
};
const tools = (e) => {
  if (e.target.classList.value === 'eraser') {
    checkTools = 'eraser';
  } else if (e.target.classList.value === 'pen') {
    checkTools = 'pen';
  } else if (e.target.classList.value === 'paint-all') {
    checkTools = 'paint-all';
  } else if (e.target.classList.value === 'rectangle') {
    checkTools = 'rectangle';
  }
  return checkTools;
};
toolsAll.addEventListener('click', tools);


primaryColor.addEventListener('input', () => {
  opts.color = primaryColor.value;
  return opts.color;
});

canvas.lineWidth = opts.radius * 2;
const pen = (e) => {
  const { width: mainCanvasWidth } = mainCanvas;
  const pixelWidth = 620 / mainCanvasWidth;
  const penX = Math.floor(e.offsetX / pixelWidth);
  const penY = Math.floor(e.offsetY / pixelWidth);
  canvas.fillStyle = primaryColor.value;
  canvas.fillRect(penX, penY, 1, 1);
};
const eraser = (e) => {
  const { width: mainCanvasWidth } = mainCanvas;
  const pixelWidth = 620 / mainCanvasWidth;
  const penX = Math.floor(e.offsetX / pixelWidth);
  const penY = Math.floor(e.offsetY / pixelWidth);
  canvas.clearRect(penX, penY, 1, 1);
};
const paintAll = () => {
  canvas.fillStyle = primaryColor.value;
  canvas.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
};
const rectangle = (e) => {
  const { width: mainCanvasWidth } = mainCanvas;
  const pixelWidth = 620 / mainCanvasWidth;
  const penX = Math.floor(e.offsetX / pixelWidth);
  const penY = Math.floor(e.offsetY / pixelWidth);
  canvas.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  imgDataRectangle = massiv[0].getImageData(0, 0, mainCanvas.width, mainCanvas.height);
  canvas.putImageData(imgDataRectangle, 0, 0);
  canvas.beginPath();
  canvas.moveTo(penX, penY);
  canvas.lineTo(rectangleX, penY);
  canvas.lineTo(rectangleX, rectangleY);
  canvas.lineTo(penX, rectangleY);
  canvas.closePath();
  canvas.lineWidth = 2;
  canvas.strokeStyle = primaryColor.value;
  canvas.stroke();
};
mainCanvas.onmousedown = (e) => {
  if (checkTools === 'pen') {
    mainCanvas.addEventListener('mousemove', pen);
    mainCanvas.removeEventListener('mousemove', eraser);
    mainCanvas.removeEventListener('click', paintAll);
    mainCanvas.removeEventListener('mousemove', rectangle);
  } else if (checkTools === 'eraser') {
    mainCanvas.removeEventListener('mousemove', pen);
    mainCanvas.removeEventListener('click', paintAll);
    mainCanvas.removeEventListener('mousemove', rectangle);
    mainCanvas.addEventListener('mousemove', eraser);
  } else if (checkTools === 'paint-all') {
    mainCanvas.removeEventListener('mousemove', pen);
    mainCanvas.removeEventListener('mousemove', eraser);
    mainCanvas.removeEventListener('mousemove', rectangle);
    mainCanvas.addEventListener('click', paintAll);
  } else if (checkTools === 'rectangle') {
    massiv.push(canvas);
    const { width: mainCanvasWidth } = mainCanvas;
    const pixelWidth = 620 / mainCanvasWidth;
    rectangleX = Math.floor(e.offsetX / pixelWidth);
    rectangleY = Math.floor(e.offsetY / pixelWidth);
    mainCanvas.removeEventListener('mousemove', pen);
    mainCanvas.removeEventListener('mousemove', eraser);
    mainCanvas.removeEventListener('click', paintAll);
    mainCanvas.addEventListener('mousemove', rectangle);
  }
  // const MouseX = e.offsetX;
  // const MouseY = e.offsetY;
  // canvas.beginPath();
  // canvas.moveTo(30, 20);
  // canvas.lineTo(150, 140);
  // canvas.lineTo(250, 30);
  // canvas.closePath();
  // canvas.strokeStyle = 'red';
  // canvas.stroke();
};
mainCanvas.onmouseup = () => {
  const t = mainCanvas.toDataURL('image/png');
  localStorage.setItem('key', t);
  mainCanvas.removeEventListener('mousemove', pen);
  mainCanvas.removeEventListener('mousemove', eraser);
  mainCanvas.removeEventListener('mousemove', rectangle);
};
export { mainCanvas, canvas };
