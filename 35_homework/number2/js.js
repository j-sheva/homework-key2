let modal = document.getElementById('myModal');
let openModalBtn = document.getElementById('openModalBtn');
let closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.onclick = function () {
  modal.style.display = 'block';
};

closeModalBtn.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
