const resizable = document.querySelector('.resizable');
const resizer = document.querySelector('.resizer');

resizer.addEventListener('mousedown', function (e) {
  e.preventDefault();
  window.addEventListener('mousemove', resize);
  window.addEventListener('mouseup', stopResize);
});

function resize(e) {
  resizable.style.width = e.clientX - resizable.offsetLeft + 'px';
  resizable.style.height = e.clientY - resizable.offsetTop + 'px';
}

function stopResize() {
  window.removeEventListener('mousemove', resize);
  window.removeEventListener('mouseup', stopResize);
}
