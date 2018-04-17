var outDiv = document.getElementById('DivForHoverItem');
var inDiv = document.getElementById('HiddenText');

outDiv.onmouseover = function() {
     inDiv.style.display = 'inline';
};

outDiv.onmouseout = function() {
     inDiv.style.display = 'none';
};
