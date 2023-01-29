
form = document.querySelector('form');

let tally = 0

function getValue() {
let color = document.getElementById('color').value;

let aliens = document.getElementById('aliens').value;

let life = document.getElementById('life').value;

let taste = document.getElementById('taste').value;

let fun = document.getElementById('fun').value;
}

function decision()  {
  if color = Blue;
  then tally =+ 1;
  if else color = Green;
  then tally =+ 4
}

if aliens = true;
then tally =+3;
if else aliens = false;
then tally =+ 2;

if life = true;
then tally =+ 3;
if else life = false;
then tally =+ 2;

if taste = savory;
then taly =+ 1;
if else aliens = sweet 
then tally =+ 3

if fun = true;
then tally =+ 3;
if else fun = false;
then tally =+ 1

if tally <9
then document.getElementById('go').removeAttribute('hidden');
document.getElementById('python').setAttribute('hidden');
document.getElementById('react).setAttribute('hidden');

if tally > 9
then document.getElementById('react').removeAttribute('hidden');
document.getElementById('python').setAttribute('hidden');
document.getElementById('go').setAttribute('hidden');

if tally < 12
then document.getElementById('python').removeAttribute('hidden');
document.getElementById('go').setAttribute('hidden');
document.getElementById('react).setAttribute('hidden');

function displayAnswer()  {
document.onsubmit.preventDefault;

}