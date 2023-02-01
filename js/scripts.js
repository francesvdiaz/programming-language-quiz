
const form = document.querySelector("form");
const submitButton = document.getElementById("button");

let info = document.querySelectorAll("input");

function decision(e)  {
  e.preventDefault();
   
  let tally = 0;
  let color = getElementById("color").value;
  let aliens = getElementById("aliens").value;
  let life = getElementById("life").value;
  let taste = getElementById("taste").value;
  let fun = getElementById("fun").value;

  if (color === "Blue") {
   tally =+ 1;
  } else if (color === "Red") {
   tally =+ 4
  } 
  if (aliens === "True") {
   tally =+3;
  } else (aliens.value === "False"); {
   tally =+ 2;
  }

  if (life. === "True") {
   tally =+ 3;
  } else (life === "False") {
   tally =+ 2;
  }

  if (taste === "Savory") {
   tally =+ 1;
  } else if (aliens.value === "Sweet") {
   tally =+ 3
  } 

  if (fun === "True") {
   tally =+ 3;
  } 

  if (tally < 9) {
   document.getElementById("go").removeAttribute("class","hidden");
   document.getElementById("python").setAttribute("class","hidden");
  document.getElementById("react").setAttribute("class","hidden");
  } else if (tally > 9 && tally < 12)  {
   document.getElementById("react").removeAttribute("class","hidden");
   document.getElementById("python").setAttribute("class","hidden");
   document.getElementById("go").setAttribute("class","hidden");
  } else  {
   document.getElementById("python").removeAttribute("class","hidden");
   document.getElementById("go").setAttribute("class","hidden");
  document.getElementById("react").setAttribute("class","hidden");
  }
info.forEach((input) => (info.value = ""));
}

