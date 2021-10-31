const botoncito = document.getElementById('btn');
const sound = new Audio('sound.mp3');


botoncito.addEventListener('click', (event) => {
  const clickedButton = event.currentTarget;
  clickedButton.setAttribute('disabled', '');
  clickedButton.innerText = 'I told you!';
  sound.addEventListener("ended", () => {
    clickedButton.removeAttribute('disabled');
    clickedButton.innerText = "Click me!";
  });
  sound.play();
});
