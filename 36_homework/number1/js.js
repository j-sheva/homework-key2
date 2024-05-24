document.addEventListener('DOMContentLoaded', function () {
  const textDisplay = document.getElementById('text-display');
  const textEdit = document.getElementById('text-edit');

  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'e') {
      event.preventDefault();
      textEdit.value = textDisplay.innerText;
      textDisplay.style.display = 'none';
      textEdit.style.display = 'block';
      textEdit.focus();
    } else if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      textDisplay.innerText = textEdit.value;
      textEdit.style.display = 'none';
      textDisplay.style.display = 'block';
    }
  });
});
