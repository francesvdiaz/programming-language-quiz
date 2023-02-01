
form = document.querySelector('form')
submitButton = document.getElementById("button")

let color = document.getElementById('color').value

let aliens = document.getElementById('aliens').value

let life = document.getElementById('life').value

let taste = document.getElementById('taste').value

let fun = document.getElementById('fun').value

let info = document.querySelectorAll("input")

function decision(e)  {
  e.preventDefault();
   
  let tally = 0;

if (color.value === "Blue") {
 tally =+ 1;
} else if (color === "Green") {
 tally =+ 4
} 
if (aliens.value === "true") {
 tally =+3;
} else (aliens.value === "false"); {
 tally =+ 2;
}

if (life.value === "True") {
 tally =+ 3;
} else (life.value = "False") {
 tally =+ 2;
}

if (taste.value === "savory") {
 tally =+ 1;
} else if (aliens.value === "sweet") {
 tally =+ 3
} 

if (fun.value === "true") {
 tally =+ 3;
} 

 document.getElementById("go").removeAttribute("class","hidden");
 document.getElementById("python").setAttribute("class","hidden");
 document.getElementById("react").setAttribute("class","hidden");
}

if (tally > 9) {
 document.getElementById("react").removeAttribute("class","hidden");
 document.getElementById("python").setAttribute("class","hidden");
 document.getElementById("go").setAttribute("class","hidden");
}

if (tally < 12) {
 document.getElementById("python").removeAttribute("class","hidden");
 document.getElementById("go").setAttribute("class","hidden");
 document.getElementById("react").setAttribute("class","hidden");
}
