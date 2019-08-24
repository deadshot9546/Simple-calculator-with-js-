let calcButtons = document.querySelectorAll(".calcBtn");
let screen = document.querySelector("#screen");
let screenHistory = document.querySelector("#screenHistory");

let sum = 0;
let isFirstClick = true;
let isClickedDot = false;
let isClicedkAction = false;

let prevAction = "";

calcButtons.forEach(addEvent);

function addEvent(item) {
    item.addEventListener("click", calcAction, false);
}

function calcAction() {
    let currentAction = this.innerHTML;
    
    if(currentAction == "0" ||
    currentAction == "1" ||
    currentAction == "2" ||
    currentAction == "3" ||
    currentAction == "4" ||
    currentAction == "5" ||
    currentAction == "6" ||
    currentAction == "7" ||
    currentAction == "8" ||
    currentAction == "9") {
        
        if(isFirstClick == true) {
            screen.innerHTML = currentAction;
            isFirstClick = false;
        }
        else {
            screen.innerHTML += currentAction;
        }
    }

    else if(currentAction == "." && isClickedDot == false) {
        if(isFirstClick == true) {
            screen.innerHTML = "0.";
            isFirstClick = false;
        }
        else {
            screen.innerHTML += ".";
        }
        isClickedDot = true;
    }

    if(currentAction == "+") {
        if(!isClicedkAction) {
            sum = getNumberFromScreen();
        } else {
            doPrevAction();
        }
        screenHistory.innerHTML += getNumberFromScreen().toString() + " + ";
        prevAction = "+";
        resetScreen();
    }

    else if(currentAction == "-") {
        if(!isClicedkAction) {
            sum = getNumberFromScreen();
        } else {
            doPrevAction();
        }
        screenHistory.innerHTML += getNumberFromScreen().toString() + " - ";
        prevAction = "-";
        resetScreen();
    }

    else if(currentAction == "*") {
        if(!isClicedkAction) {
            sum = getNumberFromScreen();
        } else {
            doPrevAction();
        }
        screenHistory.innerHTML += getNumberFromScreen().toString() + " * ";
        prevAction = "*";
        resetScreen();
    }

    else if(currentAction == "/") {
        if(!isClicedkAction) {
            sum = getNumberFromScreen();
        } else {
            doPrevAction();
        }
        screenHistory.innerHTML += getNumberFromScreen().toString() + "/";
        prevAction = "/";
        resetScreen();
    }

    else if(currentAction == "=") {
        doPrevAction();
        prevAction = "";
        screenHistory.innerHTML = "";
        isClicedkAction = false;
        screen.innerHTML = sum;
    }

    else if(currentAction == "C") {
        sum = 0;
        resetScreen();
        isClicedkAction = false;
        prevAction = "";
        screenHistory.innerHTML = "";
    }
    else if(currentAction == "CE") {
        let backspace = substring();

        sum == backspace;
        prevAction = "CE";
        screenHistory.innerHTML = "";
        isClicedkAction = true;
        screen.innerHTML = sum;    
    }
        
    

    else if(currentAction == "x<sup>2</sup>") {
        if(!isClicedkAction) {
            let number = getNumberFromScreen();
            sum = number * number;
        }
        else {
            doPrevAction();
            sum = sum * sum;
            prevAction = "";
        }
        screenHistory.innerHTML = "";
        isClicedkAction = false;
        screen.innerHTML = sum;
    }
    
}

function doPrevAction() {
    if(prevAction == "+") {
        sum += getNumberFromScreen();
    }
    if(prevAction == "-") {
        sum -= getNumberFromScreen();
    }
    if(prevAction == "*") {
        sum *= getNumberFromScreen();
    }
    if(prevAction == "/") {
        sum /= getNumberFromScreen();
    }
}

function getNumberFromScreen() {
    return parseFloat(screen.innerHTML);
}

function resetScreen() {
    screen.innerHTML = sum;
    isFirstClick = true;
    isClicedkAction = true;
    isClickedDot = false;
}
function substring() {
    screen.innerHTML = sum;
    isFirstClick = true;
    isClicedkAction = true;
    isClickedDot = false;
}