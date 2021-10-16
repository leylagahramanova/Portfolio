let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('info');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
function textChange(){
  view.innerHTML = 'My info';
}

function textReturn(){
  view.innerHTML = 'View';
}

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);