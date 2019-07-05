const delFirstFrame = (e) => {
  let firstFrame = 1;
  if (e.target.classList.contains('del--counter')) {
    counterCanvas.splice(0, 1);
    e.target.parentNode.remove();
    const inputFrame = document.querySelectorAll('counter');
    for (let item = 0; item <= inputFrame; item += 1) {
      item.value = firstFrame;
      firstFrame += 1;
    }
    counter -= 1;
  }
  return counterCanvas;
};
/* const delFrame = (e) => {
  let frame = 1;
  if (e.target.classList.contains(`.del--counter${counter}`)) {
    let child = e.target.parentNode.firstElementChild.value;
    child -= 1;
    counterCanvas.splice(child, 1);
    e.target.parentNode.remove();
    const inputFrame = document.querySelectorAll('counter');
    for (let item = 0; item <= inputFrame; item += 1) {
      item.value = frame;
      frame += 1;
    }
    counter -= 1;
  }
  return counterCanvas;
}; */
add.addeListener('click', clickFrame);
add.addeListener('click', copyCanvas);
firstDel.addeListener('click', delFirstFrame);
// del.addeListener('click', delFrame);
mainCanvas.addeListener('click', firstCopyCanvas);
