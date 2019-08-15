function encodeApng() {
  const canvasApng = document.createElement('canvastest');
  canvasApng.width = 450;
  canvasApng.height = 450;
  const encoder = new APNGencoder(canvasApng);
  encoder.start();
  encoder.setRepeat(0);
  encoder.setDelay(100 / speedRange.value);
  encoder.setDispose(1);
  encoder.setBlend(1);
  for (let i = 0; i < animationImage.children.length - 1; i++) {
    const myImageData = canvasCur(i).getContext('2d').getImageData(0, 0, 450, 450);
    canvasApng.getContext('2d').putImageData(myImageData, 0, 0);
    encoder.addFrame(canvasApng.getContext('2d'));
  }
  encoder.finish();

  const out = encoder.stream();
  return new Blob([new Uint8Array(out.bin)], { type: 'image/apng' });
}

exportApng.onclick = () => {
  const linkToSave = document.createElement('a');
  linkToSave.href = URL.createObjectURL(encodeApng());
  linkToSave.download = 'piskelAPNG.apng';
  linkToSave.click();
};