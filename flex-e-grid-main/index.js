var button = document.querySelector('.cabecalho-menu');
button.addEventListener('click', hidden);

function hidden() {
  var status = document.querySelector('.menu-lateral');

  if (status.style.display === 'flex') {
    status.style.display = 'none';
  } else {
    status.style.display = 'flex';
  }
}
