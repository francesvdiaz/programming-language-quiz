
form = document.querySelector('form');

function getValue() {
let color = document.getElementById('color').value;

let aliens = document.getElementById('aliens').value;

let life = document.getElementById('life').value;

let taste = document.getElementById('taste').value;

let fun = document.getElementById('fun').value;

let info = document.querySelectorAll("input");
}

function decision(e)  {
  e.preventDefault();
   
  let tally = 0

if (color === Blue.value) {
 tally =+ 1;
} else if (color === Green) {
 tally =+ 4
} 
if (aliens.value === true) {
tally =+3;
} else (aliens.value === false); {
tally =+ 2;
}

if (life.value === true) {
tally =+ 3;
} else (life.value = false) {
tally =+ 2;
}
if (taste.value === savory) {
taly =+ 1;
} else if (aliens.value === sweet) {
tally =+ 3
} 

if (fun.value === true) {
tally =+ 3;
} else if (fun.value === false) {
tally =+ 1
}
return tally;
}

function displayAnswer()  {
  document.onsubmit.preventDefault;
  
if tally <9
then document.getElementById('go').removeAttribute('hidden');
document.getElementById('python').setAttribute('hidden');
document.getElementById('react).setAttribute('hidden');

if tally > 9
then document.getElementById('react').removeAttribute('hidden');
document.getElementById('python').setAttribute('hidden');
document.getElementById('go').setAttribute('hidden');

if tally < 12;
then document.getElementById('python').removeAttribute('hidden');
document.getElementById('go').setAttribute('hidden');
document.getElementById('react').setAttribute('hidden');
}