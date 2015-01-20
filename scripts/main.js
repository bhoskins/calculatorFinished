// var one = document.getElementById('one');
// var oneValue;
// oneValue = one.attribute['data-cost'];



var ac = document.getElementById('ac');
var back = document.getElementById('back');

var firstNumber;
var secondNumber;
var operator;
// 1 = *; 2 = /; 3 = -; 4 = +

var btnValue = 0;


var displayResults;
displayResults = 0;
document.getElementById('results').value = displayResults;

// Number button variables and listenrs
var buttonOne = document.getElementById('one');
var buttonTwo = document.getElementById('two');
var buttonThree = document.getElementById('three');
var buttonFour = document.getElementById('four');
var buttonFive = document.getElementById('five');
var buttonSix = document.getElementById('six');
var buttonSeven = document.getElementById('seven');
var buttonEight= document.getElementById('eight');
var buttonNine = document.getElementById('nine');
var buttonZero = document.getElementById('zero');


buttonOne.addEventListener("click", runOne);
buttonTwo.addEventListener("click", runTwo);
buttonThree.addEventListener("click", runThree);
buttonFour.addEventListener("click", runFour);
buttonFive.addEventListener("click", runFive);
buttonSix.addEventListener("click", runSix);
buttonSeven.addEventListener("click", runSeven);
buttonEight.addEventListener("click", runEight);
buttonNine.addEventListener("click", runNine);
buttonZero.addEventListener("click", runZero);

// Deciamal variable and listener
var buttonDecimal = document.getElementById('decimal');
buttonDecimal.addEventListener("click", placeDecimal);

// Simple Operator Buttons and listerners

var multiply = document.getElementById('multiply'); // operator = 1
var divide = document.getElementById('divide');     // operator = 2
var subtract = document.getElementById('subtract'); // operator = 3
var add = document.getElementById('add');           // operator = 4
var numberSwitch = false;  // to switch from firstNumber to secondNumber

var buttonca = document.getElementById('ac');
buttonca.addEventListener("click", clearAll);

var buttonBack = document.getElementById('back');
buttonBack.addEventListener("click", goBack);

function goBack (event) {
  event.preventDefault();
  displayResults += "";
  var length = displayResults.length - 1;
  var newdisplayResults = displayResults.substring(0, length);
  document.getElementById('results').value = newdisplayResults;
  displayResults = Number(newdisplayResults);
}

function clearAll (event) {
  event.preventDefault();
  firstNumber = null;
  secondNumber = null;
  hasDecimal = false;
  firstDecimal = false;
  numberSwitch = false;
  displayResults = 0;
  document.getElementById('results').value = displayResults;
}

multiply.addEventListener("click", calcMultiply);
divide.addEventListener("click", calcDivide);
subtract.addEventListener("click", calcSubtract);
add.addEventListener("click", calcAdd);

// Equals button and listener
var equals = document.getElementById('equals');

equals.addEventListener("click", calcEquals);

var hasDecimal;
hasDecimal = false;
var firstDecimal;
firstDecimal = false;


firstNumber = null;
secondNumber = null;
operator = 0;



// testing variables below
// firstNumber = 2.5;
// operator = 1;
displayResults = 0;



function calcMultiply (event) {
  event.preventDefault();
  operator = 1;
  numberSwitch = true;
  document.getElementById('results').value = displayResults;

}

function calcDivide (event) {
  event.preventDefault();
  operator = 2;
  numberSwitch = true;
  document.getElementById('results').value = displayResults;
}

function calcSubtract (event) {
  event.preventDefault();
  operator = 3;
  numberSwitch = true;
  document.getElementById('results').value = displayResults;
}

function calcAdd (event) {
  event.preventDefault();
  operator = 4;
  numberSwitch = true;
  document.getElementById('results').value = displayResults;
}


function calcEquals(event) {
  event.preventDefault();
  if ( (firstNumber == null) || ((secondNumber == null ) && (parseInt(operator) <= 4 ))) {
    return;
  }
  if ( firstNumber != null && secondNumber != null && (parseInt(operator) == 1) ) {
    displayResults = firstNumber * secondNumber;
    document.getElementById('results').value = displayResults;
    firstNumber = displayResults;
    secondNumber = null;
    numberSwitch = true;
  }

  if ( firstNumber != null && secondNumber != null && (parseInt(operator) == 2) ) {
    displayResults = firstNumber / secondNumber;
    document.getElementById('results').value = displayResults;
    firstNumber = displayResults;
    secondNumber = null;
    numberSwitch = true;
  }

  if ( firstNumber != null && secondNumber != null && (parseInt(operator) == 3) ) {
    displayResults = firstNumber - secondNumber;
    document.getElementById('results').value = displayResults;
    firstNumber = displayResults;
    secondNumber = null;
    numberSwitch = true;
  }

  if ( firstNumber != null && secondNumber != null && (parseInt(operator) == 4) ) {
    displayResults = firstNumber + secondNumber;
    document.getElementById('results').value = displayResults;
    firstNumber = Number(displayResults);
    secondNumber = null;
    numberSwitch = true;
  }
}




function runOne (event) {
  event.preventDefault();
  btnValue = 1;
  displayBtn(1);
}

function runTwo (event) {
  event.preventDefault();
  btnValue = 2;
  displayBtn(2);
}

function runThree (event) {
  event.preventDefault();
  btnValue = 3;
  displayBtn(3);
}

function runFour (event) {
  event.preventDefault();
  btnValue = 4;
  displayBtn(4);
}

function runFive (event) {
  event.preventDefault();
  btnValue = 5;
  displayBtn(5);
}

function runSix (event) {
  event.preventDefault();
  btnValue = 6;
  displayBtn(6);
}

function runSeven (event) {
  event.preventDefault();
  btnValue = 7;
  displayBtn(7);
}

function runEight (event) {
  event.preventDefault();
  btnValue = 8;
  displayBtn(8);
}

function runNine (event) {
  event.preventDefault();
  btnValue = 9;
  displayBtn(9);
}

function runZero (event) {
  event.preventDefault();
  btnValue = 0;
  displayBtn(0);
}


 document.getElementById('results').value = displayResults;
operator = 0;





function displayBtn (btnValue) {

  // button first pushed
  if ( (numberSwitch == false) && (firstNumber == null )  && (hasDecimal == false) ) {
    firstNumber = btnValue;
    displayResults = firstNumber;
  } else if ( (numberSwitch == false) && (firstNumber !== null) && (hasDecimal == false )) {
    firstNumber += "" + btnValue;
    displayResults = firstNumber;
  }

  else if ( (numberSwitch == false ) && (firstNumber !== null ) && (hasDecimal == true ) && (firstDecimal == true )) {
      firstNumber += "." + btnValue;
      displayResults = firstNumber;
      firstDecimal = false;

  } else if ((numberSwitch == false ) && (firstNumber !== null ) && (hasDecimal == true ) && (firstDecimal == false )) {
    firstNumber = (firstNumber + "") + btnValue;
    displayResults = firstNumber;



  } else if ( (numberSwitch == true) && (secondNumber == null )  && (hasDecimal == false) ) {
    secondNumber = btnValue;
    displayResults = secondNumber;
  } else if ( (numberSwitch == true) && (secondNumber !== null) && (hasDecimal == false )) {
    secondNumber += "" + btnValue;
    displayResults = secondNumber;
  }

  else if ( (numberSwitch == true ) && (secondNumber !== null ) && (hasDecimal == true ) && (firstDecimal == true )) {
    secondNumber += "." + btnValue;
    displayResults = secondNumber;
    firstDecimal = false;

  } else if ((numberSwitch == true) && (secondNumber !== null ) && (hasDecimal == true ) && (firstDecimal == false )) {
    secondNumber += "" + btnValue;
    displayResults = secondNumber;
  }


  document.getElementById('results').value = displayResults;
  displayResults = Number(displayResults);
  return;
}



function placeDecimal (event) {
  event.preventDefault();
  if ( (hasDecimal == false) ) {
    displayResults = displayResults + "" + ".";
    firstDecimal = true;
    hasDecimal = true;
    document.getElementById('results').value = displayResults;

  } else  {
      return;
  }
}









//
//
// firstNumber = 2;
// secondNumber = 4;
// operator = 6
//
// // how to output answer at the end
//
// function calculateResults (event) {
//   event.preventDefault();
//
//   result = firstNumber * secondNumber;
//   console.log(result);
//
//
// }
//
// // How to get equals button to submit: submit button?
// document.getElementById('equals').addEventListener('click', calculateResults);
//
//
//
// // How to display results;
// var results = 6;
// document.getElementById('results').value = results;
//
// // console.log(one);
//
//
//
// var test = function () {
//   console.log('someone clicked something');
// }
//
// var sort = function () {
//   this
// }
//
//
//


/*

console.log(multiply1(2,4))

function calculate (firstNumber, secondNumber, operator) {
  if (operator === 6) {
    var result = firstNumber * secondNumber;
    resetTest += resetTest
    return;
  } else if (operator === 7) {
    var result = firstNumber / secondNumber;
    resetTest += resetTest
    return;

  } else if (operator === 8) {
    var result = firstNumber + secondNumber;
    resetTest += resetTest
    return;

  } else if (operator === 9) {
    var result = firstNumber - secondNumber;
    resetTest += resetTest
    return;
  }
return;
}


  console.log(result);

*/

//  listen for the element to be clicked


// When button clicked do a function check
      // dedide if number or operator or equals








// if it is an operator,
    //put it in var operator = "*" etc

// if it is equal
    // call funcAnswer();
    //funcAnswer(firstNumber, secondNumber, funcOperation(0)) {
    // var operationString =
    //"firstNumber" + "operator" + "secondNumber"
  // eval(operationString)
  //  return answer; print answer
  // set var firstNumber, var SecondNumber to null
