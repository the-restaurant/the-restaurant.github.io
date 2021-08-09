//test program 01 - individual js file. this is all program-specific
//webconsole.js must be loaded before this!

nextDirective = "Yo, it's me, computer. Input command:";

textHist = nextDirective;
document.getElementById("consoleOut").innerHTML = textHist;
document.getElementById("consoleIn").value = "";

let meepCounter = 10;
let seenMeepsMsg = false;
let meepIndex = -1;
let dontIndex = -1;
let don_tIndex = -1;
let doNotIndex = -1;

//function that's called by the page on submit or main button press
function thisProgram() {
  document.getElementById("consoleIn").value = "";
  cin = cin.trim();
  if (!cin) {
    newText = "Bad input.";
    nextDirective = "Input command:";
    cin = " ";
    updateConsole();
    return;
  }
  meepIndex = cin.toLowerCase().indexOf("meep");
  dontIndex = cin.toLowerCase().indexOf("dont");
  don_tIndex = cin.toLowerCase().indexOf("don\'t");
  doNotIndex = cin.toLowerCase().indexOf("do not");
  dontIndex = dontIndex < 0 ? 9999 : dontIndex;
  don_tIndex = don_tIndex < 0 ? 9999 : don_tIndex;
  doNotIndex = doNotIndex < 0 ? 9999 : doNotIndex;
  if (meepIndex >= 0) {
    //special "do not meep" case
    if (Math.min(dontIndex, don_tIndex, doNotIndex) < meepIndex) {
      if (meepCounter !== 1) {
        newText = "You chose not to meep. " + meepCounter + " meeps remain.";
      } else {
        newText = "You chose not to meep. " + meepCounter + " meep remains.";
      }
      nextDirective = "Input command:";
      updateConsole();
      return;
    }
    if (meepCounter > 2) {
      meepCounter--;
      newText = "You meeped. " + meepCounter + " meeps remain.";
    } else if (meepCounter > 1) {
      meepCounter--;
      newText = "You meeped. You're down to your last meep.";
    } else {
      if (!seenMeepsMsg) {
        newText = "$500 cash prize unlocked! Nice! Claim here: [broken link]";
        seenMeepsMsg = true;
        meepCounter = 0;
      } else {
        newText = "Meeping unavailable due to lack of available meeps.";
      }
    }
    nextDirective = "Input command:";
    updateConsole();
    return;
  }
  newText = "Good input, unfortunately this is not a real program yet. But it knows you said " + cin + ".";
  nextDirective = "Input command:";
  updateConsole();
}

//always define supplemental button action in program-specific js file so it can be customized
function supButton(buttonID) {
  cin = "<<" + buttonArray[parseInt(buttonID, 10) - 1].toString() + " Button>>";
  thisProgram();
}
