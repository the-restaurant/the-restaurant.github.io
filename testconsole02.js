//test program 02 - individual js file. this is all program-specific
//webconsole.js must be loaded before this!

nextDirective = "Enter your character's name:";

textHist = "Welcome to the game. This is a text game.\n\n" + nextDirective;
document.getElementById("consoleOut").innerHTML = textHist;
document.getElementById("consoleIn").value = "";
let supButtonIndex = 99;

/*step ids for this program:
___0 - enter name
___1 - pick one of the four shirt colors
___2 - name the shirt
___3 - fight the cube*/
let programStep = 0;

function Player(inputPlayerName) {
  this.playerName = inputPlayerName.toString();
  this.hp = 40;
  this.playerAttackStr = 8;
  this.playerDefenseStr = 6;
  this.playerDodgeStr = 3;
  this.playerDodgeRoll = 0;
  this.playerMissRoll = 0;
  this.playerAttackRoll = 0;
  this.playerAccuracy = 5;
  this.playerXP = 0;
}

Player.prototype.meow = function (meowParameter) {
  return 0;
};

let player1 = undefined;
let cinlc = "";
let shirtColorValid = false;
const possShirtColors = ["red", "orange", "blue", "purple"];
let firstEnemy = undefined;

function CubeEnemy(inputCubeName) {
  this.enemyName = inputCubeName.toString();
  this.enemyType = "Cube";
  this.hp = 20 + (Math.random() * 11 << 0);
  this.enemyAttackStr = 8 + (Math.random() * 5 << 0);
  this.enemyDefenseStr = 8 + (Math.random() * 5 << 0);
  this.enemyDodgeStr = 2 + (Math.random() * 2 << 0);
  this.enemyAccuracy = 6 + (Math.random() * 5 << 0);
  this.expGift = 400 + ((Math.random() * 111) << 0);
  this.enemyDodgeRoll = 0;
  this.enemyMissRoll = 0;
  this.enemyAttackRoll = 0;
  this.enemyParalyzed = false;
  this.enemyDead = false;
}

CubeEnemy.prototype.kippy = function (kippyParameter) {
  return 0;
};

const initValues = {
  next_directive: nextDirective,
  test_value: 450
};

//function that's called by the page on submit or main button press
function thisProgram() {
  document.getElementById("consoleIn").value = "";
  cin = sanitize(cin, maxInputLength);
  if (!cin) {
    newText = "Bad input.";
    cin = " ";
    updateConsole();
    return;
  }
  if (supButtonIndex < 99 && buttonableSteps.indexOf(programStep) < 0) {
    newText = "Bad input.";
    supButtonIndex = 99;
    updateConsole();
    return;
  }
  cinlc = cin.toLowerCase();
  window["program" + programStep.toString()]();
}

function program0() {
  player1 = new Player(cin);
  newText = "You have chosen the name " + player1.playerName + ".";
  nextDirective = "Choose one of the four shirt colors: red, orange, blue, or purple.\nYou can also use one of the four buttons. (A=red, B=orange, C=blue, D=purple):";
  programStep = 1;
  updateConsole();
}

function program1() {
  if (supButtonIndex <= 3) {
    cinlc = possShirtColors[supButtonIndex];
    supButtonIndex = 99;
  }
  shirtColorValid = possShirtColors.indexOf(cinlc) > -1;
  if (!shirtColorValid) {
    newText = "Not an available shirt color.";
    updateConsole();
    return;
  }
  player1.shirtColor = cinlc;
  newText = "You chose the " + player1.shirtColor + " shirt. It has been added to your inventory.";
  nextDirective = "Please give the shirt a name:";
  programStep = 2;
  updateConsole();
}

function program2() {
  player1.shirtName = cin;
  newText = "Your " + player1.shirtColor + " shirt's name is " + player1.shirtName + ".\n\nOh no, a cube has taken " + player1.shirtName + " from you and attacked you, " + player1.playerName + "!";
  nextDirective = "Press A to attack or B to dodge/heal!:";
  firstEnemy = new CubeEnemy("Demon");
  programStep = 3;
  updateConsole();
}

function program3() {
  if (supButtonIndex > 1) {
    newText = "Bad input.";
    supButtonIndex = 99;
    updateConsole();
    return;
  }
  if (firstEnemy.hp <= 0) {
    newText = "Unfortunately this is as far as this goes.";
    nextDirective = "Can't do anything:";
    supButtonIndex = 99;
    updateConsole();
    return;
  }
  if (supButtonIndex === 0) {
    //attack
    player1.playerMissRoll = Math.random() * player1.playerAccuracy << 0;
    if (player1.playerMissRoll >= firstEnemy.enemyDodgeStr) {
      //hit
      firstEnemy.hp -= ranger(player1.playerAttackStr / 2, 2);
      newText = "You successfully attacked the cube! It now has " + firstEnemy.hp + " HP left.";
    } else {
      //miss
      player1.hp -= ranger(firstEnemy.enemyAttackStr / 2, 2);
      newText = "You missed and the cube attacked in retaliation! You have " + player1.hp + " HP left.";
    }
  } else {
    //dodge
    player1.playerDodgeRoll = Math.random() * player1.playerDodgeStr << 0;
    if (player1.playerDodgeRoll > 0) {
      player1.hp++;
      newText = "You successfully dodged the cube's next attack and gained 1 HP!";
    } else {
      player1.hp -= ranger(firstEnemy.enemyAttackStr / 2, 2);
      newText = "The cube attacked you despite your attempt to dodge! You have " + player1.hp + " HP left.";
    }

  }
  if (player1.hp <= 0) {
    newText = "The cube killed you! 0 HP left. Game over.";
    resetProgram();
    updateConsole();
    return;
  }
  if (firstEnemy.hp <= 0) {
    newText = "YOU WON! The cube is dead and " + player1.shirtName + " has been returned to you! You also earned " + firstEnemy.expGift + " experience points!";
    nextDirective = "Unfortunately you've reached the end of this for now:";
    supButtonIndex = 99;
    updateConsole();
    return;
  }
  nextDirective = "Press A to attack or B to dodge/heal!:";
  supButtonIndex = 99;
  updateConsole();
}

//program steps where a button input is accepted
const buttonableSteps = [1, 3, 89];

//always define supplemental button action in program-specific js file so it can be customized
function supButton(buttonID) {
  supButtonIndex = parseInt(buttonID, 10) - 1;
  cin = "<<" + buttonArray[supButtonIndex].toString() + ">>";
  thisProgram();
}

function resetProgram() {
  nextDirective = initValues.next_directive;
  player1 = undefined;
  firstEnemy = undefined;
  supButtonIndex = 99;
  programStep = 0;
}

function ranger(num, maxOneWayDiff) {
  let addit = Math.random() < 0.5 ? Math.round(Math.random() * maxOneWayDiff) : Math.round(Math.random() * maxOneWayDiff) * -1;
  return (num + addit) > 0 ? Math.round(num + addit) : 0;
}
