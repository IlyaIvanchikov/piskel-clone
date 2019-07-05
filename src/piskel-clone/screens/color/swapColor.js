const swapColor = document.querySelector('.swapColor');
const primaryColor = document.querySelector('.primaryColor');
const secondaryColor = document.querySelector('.secondaryColor');
const swap = () => {
  const primary = primaryColor.value;
  const secondary = secondaryColor.value;
  primaryColor.value = secondary;
  secondaryColor.value = primary;
  return primaryColor.value;
};
swapColor.addEventListener('click', swap);
