const params = new URLSearchParams(window.location.search);
const firstname = params.get('firstname');
const outputElement = document.getElementById('firstname');
outputElement.textContent = firstname;