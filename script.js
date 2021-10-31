const botoncito = document.getElementById('btn');
const scaryImage = document.getElementById('pic');
const scream = new Audio('scream.mp3');
const laugh = new Audio('laugh.mp3');


botoncito.addEventListener('click', (event) => {
  const clickedButton = event.currentTarget;
  clickedButton.setAttribute('disabled', '');
  clickedButton.innerText = '👻 I told you! 👻';
  scaryImage.style.display = "block";
  scream.volume = 1
  laugh.volume = 1
  scream.play();
  laugh.play();
});
