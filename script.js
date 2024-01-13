let btn = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

btn.addEventListener('mouseover', movimiento);
btn2.addEventListener('click', abrirLink);

function movimiento() {
  if (btn.classList.contains('posicion_normal')) {
    btn.classList.replace('posicion_normal', 'move1');
  } else if (btn.classList.contains('move1')) {
    btn.classList.replace('move1', 'move2');
  } else if (btn.classList.contains('move2')) {
    btn.classList.replace('move2', 'move3');
  } else {
    btn.classList.replace('move3', 'posicion_normal');
  }
}

function abrirLink() {
  window.open('https://youtube.com/shorts/0cxa6xPhlqM?feature=share');
}