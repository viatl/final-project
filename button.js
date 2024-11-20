// Create a new HTML document structure
document.addEventListener('DOMContentLoaded', function() { const p2 = document.createElement('p'); p2.id = 'demo'; p2.style.display = 'none';p2.textContent = 'CTF{H1dd3nM3ss@g3_InPl@inS1ght!}'; document.body.appendChild(p2);// Create a button element with onclick functionality to show the hidden paragraphconst button = document.createElement('button');button.type = 'button';button.textContent = 'Click Me!';button.onclick = function() {document.getElementById('demo').style.display = 'block'; };document.body.appendChild(button);
});
