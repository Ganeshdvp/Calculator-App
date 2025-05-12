let allButtons = document.getElementsByTagName("button"); //all buttons
let result = document.getElementById("result");
let history = document.getElementById("history");
let toggleBtn = document.getElementById("toggleBtn");

for (let i = 0; i < allButtons.length; i++) {
  // iterate through all buttons
  allButtons[i].onclick = function () {
    // adding onclick event
    let input = this.innerText;
    updateDisplay(input);
  };
}

function updateDisplay(input) {
  let currentDisplay = result.innerText;
  if (currentDisplay === "0") {
    if (input != "AC" && input != "DEL" && input != "=") {
      result.innerText = "";
      result.innerText = input;
      history.innerText = "";
    }
  }
  if (input === "DEL") {
    result.innerText = currentDisplay.substring(0, currentDisplay.length - 1);
  } else if (input === "AC") {
    result.innerText = "0";
    history.innerText = "";
  } else if (input != "AC" && input != "DEL" && input != "=") {
    result.innerText += input;
  }
  if (input === "=") {
    let expression = result.innerText;
    try {
      let calculationResult = eval(expression); // Evaluate the expression
      history.innerText += `${expression} = ${calculationResult}\n`;
      result.innerText = calculationResult;
    } catch (err) {
      result.innerText = "Error"; // Handle invalid expressions
    }
  }
}

// Themes (dark and light)
let body = document.body;

function switchToggle(){
  if(body.classList.contains("dark-theme")){
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    toggleBtn.innerText = "☀️";
  }
  else{
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    toggleBtn.innerText = "🌙";
  }
}




//Key features

// Responisive design
// Theme (Light and Dark)
// History of calculations
// handling of invalid expressions by using try and catch
// event delegation
// using eval() to evaluate the expression
// plain css
// seo friendly