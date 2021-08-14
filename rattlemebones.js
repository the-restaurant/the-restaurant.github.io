//shuffle an array in place (modifies original)
function shuffle(inputArray) {
  for (let i = 0, len = inputArray.length, arrayCopy = inputArray.splice(0); i < len; i++) {
    inputArray.push(arrayCopy.splice((Math.random() * arrayCopy.length) << 0, 1)[0]);
  }
}

//get a shuffled copy of an array
function shuffledArray(inputArray) {
  let arrayCopy = inputArray.slice(0);
  let newArray = [];
  while (arrayCopy.length > 0) {
    newArray.push(arrayCopy.splice((Math.random() * arrayCopy.length) << 0, 1)[0]);
  }
  return newArray;
}

//are two objects identical?
function areObjectsEqual(obj1, obj2) {
  let props1 = Object.getOwnPropertyNames(obj1);
  let props2 = Object.getOwnPropertyNames(obj2);
  if (props1.length !== props2.length) {
    return false;
  }
  for (let i = 0; i < props1.length; i++) {
    if (!obj2.hasOwnProperty(props1[i]) || obj1[props1[i]] !== obj2[props1[i]]) {
      return false;
    }
  }
  return true;
}

//are two arrays identical?
function areArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

//do two arrays have any differences?
function areArraysDifferent(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return true;
  }
  let diffTrip = false;
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    if (arr1[i] !== arr2[i]) {
      diffTrip = true;
    }
  }
  return diffTrip;
}

//are arrays identical? (false if ANY differences)
//true: arrays have no differences at all
//false: arrays either have at least one discrepant value or different lengths
function arraysSame(arr1, arr2) {
  let sameTrip = true;
  if (arr1.length !== arr2.length) {
    sameTrip = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        sameTrip = false;
      }
    }
  }
  return sameTrip;
}

//eval if two arrays have exactly the same data
//true: arrays have no differences
//false: arrays either have at least one discrepant value or different lengths
function equalArrays(arr1, arr2) {
  let diffTrip = false;
  if (arr1.length !== arr2.length) {
    diffTrip = true;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        diffTrip = false;
      }
    }
  }
  return !diffTrip;
}

//returns true or false
function objectAlreadyExists(testingObject, objectsArray) {
  for (let i = 0; i < objectsArray.length; i++) {
    if (testingObject.name === objectsArray[i].name) {
      return true;
    }
  }
  return false;
}

//proper rounding of positive and negative numbers
function smartRound(inputNumber) {
  if (inputNumber > 0) {
    return inputNumber - (inputNumber << 0) >= 0.5 ? (inputNumber << 0) + 1 : inputNumber << 0;
  }
  if (inputNumber < 0) {
    return inputNumber - (inputNumber << 0) <= -0.5 ? (inputNumber << 0) - 1 : inputNumber << 0;
  }
  return 0;
}

//condensed version of above rounding function
function smartRound(inputNumber) {
  return inputNumber > 0 ? (inputNumber - (inputNumber << 0) >= 0.5 ? (inputNumber << 0) + 1 : inputNumber << 0) : (inputNumber < 0 ? (inputNumber - (inputNumber << 0) <= -0.5 ? (inputNumber << 0) - 1 : inputNumber << 0) : 0);
}

//fast random bool
function rbool() {
  return Math.random() < 0.5;
}

//conditions/values Exclusive Or (XOR)
function xor(arg1, arg2) {
  return arg1 !== arg2;
}

//return true if only one value is truthy (XOR)
function xorTruthy(arg1, arg2) {
  return !!(arg1) !== !!(arg2);
}

//return true only if both values are truthy (AND)
function andTruthy(arg1, arg2) {
  return !!(arg1) && !!(arg2);
}

//return true only if both values are falsy (NOT AND)
function andFalsy(arg1, arg2) {
  return !(arg1) && !(arg2);
}

//return true if either condition/value is truthy
function orTruthy(arg1, arg2) {
  return !!(arg1) || !!(arg2);
}

//return true if truthy/falsy values match
function truthyFalsyMatch(arg1, arg2) {
  return !!(arg1) === !!(arg2);
}





//for some reason, a single iteration for loop

for (let i = 1; i; i--) {
  score += 5;
  if (userInput.indexOf("walk") > -1) {
    console.log("user walked");
    break;
  }
  if (userInput.indexOf("apple") > -1) {
    console.log("user ate apple");
    break;
  }
  if (userInput.indexOf("sand") > -1) {
    console.log("Went to sand");
    break;
  }
  console.log("BAD INPUT");
}

//switch case trick for conditions

let userInput = "walk";
let acceptedInputs = ["run", "sleep", "walk", "die"];

switch (userInput) {
  case (acceptedInputs.indexOf("walk") > -1 ? userInput : null):
    console.log("you walked");
    break;
  case (acceptedInputs.indexOf("sleep") > -1 ? userInput : null):
    console.log("you slept");
    break;
  default:
    console.log("no user input was valid");
}



function cutThisAndAfter(originalString, targetString) {
  let cutIndex = originalString.indexOf(targetString);
  return originalString.slice(0, cutIndex);
}

function cutUntil(originalString, targetString) {
  let startIndex = originalString.indexOf(targetString);
  return originalString.slice(startIndex);
}
