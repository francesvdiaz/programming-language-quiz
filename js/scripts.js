window.addEventListener("load", function() { 
  const button = document.getElementById("button");

  button.addEventListener("click", function(event) {
    event.preventDefault();

    const color = document.getElementById("color").value;
    const aliens = document.getElementById("aliens").value;
    const car = document.getElementById("car").value;
    const taste = document.getElementById("taste").value;
    const fun = document.getElementById("fun").value;

    if (color === "blue" && aliens === "yes" && car === "yes" && taste === "savory" && fun === "yes") {
      document.getElementById("go").removeAttribute("class","hidden");
      document.getElementById("python").setAttribute("class","hidden");
      document.getElementById("react").setAttribute("class","hidden");
    } else if (color == "blue" && aliens == "yes" && car == "yes" && taste == "sweet" && fun == "yes") {
      document.getElementById("react").removeAttribute("class","hidden");
      document.getElementById("python").setAttribute("class","hidden");
      document.getElementById("go").setAttribute("class","hidden");
    } else {
      document.getElementById("python").removeAttribute("class","hidden");
      document.getElementById("go").setAttribute("class","hidden");
      document.getElementById("react").setAttribute("class","hidden");
    }
});
});
