const ogText = document.getElementById('text-field');

const submitButton = document.getElementById('text-submit');

const newText = document.getElementById('new-text');

submitButton.addEventListener('click', function() {
  newText.innerHTML = '<p>' + ogText.value + '</p>';

});
