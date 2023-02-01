window.onload = function (event) {
  event.preventDefault 
  let button = document.getElementById("button");
  let input = document.querySelectorAll("input");
   
  button.addEventListener("click", function() {

  let color = getElementById("color").value;
  let aliens = getElementById("aliens").value;
  let life = getElementById("life").value;
  let taste = getElementById("taste").value;
  let fun = getElementById("fun").value;

  if (color === "Blue" && aliens === "True" && life === "True" && taste === "Sweet" && fun === "True") {
    document.getElementById("go").removeAttribute("class","hidden");
    document.getElementById("python").setAttribute("class","hidden");
    document.getElementById("react").setAttribute("class","hidden");
  } else if (color === "Red" && aliens === "False" && life === "False" && taste === "Savory" && fun === "False") {
    document.getElementById("react").removeAttribute("class","hidden");
    document.getElementById("python").setAttribute("class","hidden");
    document.getElementById("go").setAttribute("class","hidden");
  } 
  else (aliens === "True") {
    document.getElementById("python").removeAttribute("class","hidden");
    document.getElementById("go").setAttribute("class","hidden");
    document.getElementById("react").setAttribute("class","hidden");
  };
 });
 }