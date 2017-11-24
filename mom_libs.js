const ogText = document.getElementById('text-field');

const submitButton = document.getElementById('text-submit');

const newText = document.getElementById('new-text');

const seeLibButton = document.getElementById('seeLib');

const renderLib = document.getElementById('renderLib');

// submitButton.addEventListener('click', function() {
//   newText.innerHTML = '<p>' + ogText.value + '</p>';
//
// });

seeLibButton.addEventListener('click', function(){
  let verb = document.getElementById('verb').value;
  let noun = document.getElementById('noun').value;
  let adjective = document.getElementById('adjective').value;
  renderLib.innerHTML = '<p>He ' + verb + ' through the ' + noun + ' while he ate a ' +
  adjective + ' corndog.</p>';

});
