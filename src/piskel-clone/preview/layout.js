// let test;
const murkup = `
<div class = "wrapper">
<header class="header">
<div class="div--nav"></div>
<h1>PiSKEL</h1>
<h2>New Piskel</h2>
</header>
<main class="mainMurkup">
<div class="descriptionMurkup">
<section class="sectionHeader">
<p class="p">This project is a Final Task from the Second stage of Rolling Scopes School Q1 2019.</p>
</section>
<section class="sectionMain">
<p class="pp">It is a clone of Piskel app.</p>
<p class="ppp">Project Functionality</p>
<p class="pppp">You can use next tools:</p>
</section>
<ul class="ul">
<li class="li">Pen</li>
<li class="li">Paint bucket</li>
<li class="li">Eraser</li>
<li class="li">Rectangle</li>
<li class="li">Select primary & secondary color</li>
</ul>
<p class="ppppp">And also you can use frame management, preview Window, landing Page, custom canvas size, layers, show cursor coordinates / canvas size.</p>
<div class="gif">
<div class="gif1"></div>
<div class="gif2"></div>
<div class="gif3"></div>
</div>
</div>
<div class="animationMurkup"></div>
</main>
<footer class="footer">
<p class="pppppp">Author: Ilya Ivanchikov</p>
</footer>
</div>`;

const piskel = `
<div class= "wrapper">
<header class="header">
<div class="div--nav"></div>
<h1>PiSKEL</h1>
<h2>New Piskel</h2>
<button class="button2" tabindex="0">landing Page NOW</button>
</header>
<main class="main">
<div class="tools">
<div class="tools--main">
<div class ="panel">
<div class="size">
<div class="square1">
<div class="square--1"></div>
</div>
<div class="square2">
<div class="square--2"></div>
</div>
<div class="square3">
<div class="square--3"></div>
</div>
<div class="square4">
<div class="square--4"></div>
</div>
</div>
<div class="tools--all">
<div class="left">
<div class ="pen"></div>
<div class ="paint"></div>
<div class ="eraser"></div>
<div class ="rectangle"></div>
<div class ="move"></div>
<div class ="rectangle--selection"></div>
<div class ="lighten"></div>
<div class ="color--picker"></div>
</div>
<div class="right">
<div class ="mirror"></div>
<div class ="paint-all"></div>
<div class ="stroke"></div>
<div class ="circle"></div>
<div class ="shape--selection"></div>
<div class ="lasso"></div>
<div class ="dithering"></div>
</div>
</div>
<div class="color">
<input type="color" class="secondaryColor">
<input type="color" class="primaryColor">
<div class ="swapColor"></div>
</div>
</div>
</div>
<div class="frame--box">
<div class="frame frame--counter">
<input  disabled type="button" class="counter" value="1"/>
<canvas id="frameCanvasId" class="frameCanvas canvas--counter"></canvas>
<div class="copy copy--counter"></div>
<div class="del del--counter"></div>
</div>
<button class="add">Add new frame</button>
</div>
</div>
<div class="canvas">
<canvas id="mainCanvas"></canvas>
</div>
<div class="animation">
<canvas id="animationCanvas"></canvas>
<div class ="fps">
<div class="valueInput">1</div>
<input class="input" type="range" min="1" max="24" step="1" value="1">
</div>
<select id="listItem">
  <option value="32">32*32</option>
  <option value="64">64*64</option>
  <option value="128">128*128</option>
</select>
<div class="mouseMove">1</div>
</div>
</main>
</div>`;

document.body.innerHTML = piskel;
const piskelCloneMain = document.querySelector('.button2');
const main = document.querySelector('.main');

const piskelCloneRender = () => {
  main.remove();
  piskelCloneMain.remove();
  document.body.innerHTML = murkup;
};

piskelCloneMain.addEventListener('click', piskelCloneRender);
