//shuffle an array in place (modifies original)
function shuffle(inputArray) {
  for (let i = 0, len = inputArray.length, arrayCopy = inputArray.splice(0); i < len; i++) {
    inputArray.push(arrayCopy.splice((Math.random() * arrayCopy.length) >> 0, 1)[0]);
  }
}

//get a shuffled copy of an array
function shuffledArray(inputArray) {
  let arrayCopy = inputArray.slice(0);
  let newArray = [];
  while (arrayCopy.length > 0) {
    newArray.push(arrayCopy.splice((Math.random() * arrayCopy.length) >> 0, 1)[0]);
  }
  return newArray;
}
