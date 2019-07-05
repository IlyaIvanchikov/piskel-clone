const mainCanvas = document.getElementById('mainCanvas');
const MouseMove = document.querySelector('.mouseMove');

mainCanvas.addEventListener('mousemove', (e) => {
  MouseMove.innerHTML = `${e.offsetX}:${e.offsetY}`;
});
