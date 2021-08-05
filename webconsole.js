//web console

let cin = "";
let textHist = "";
let newText = "";
let nextDirective = "";
let commandSeparator = " ";
let outputSeparator = "\n";
let directiveSeparator = "\n";
const buttonArray = ["A", "B", "C", "D"];

function toConsole() {
  cin = document.getElementById("consoleIn").value.toString();
  //this function defined in the specific program js, not webconsole.js
  thisProgram();
}

function updateConsole() {
  if (newText.length <= 0) {
    return;
  }
  textHist = textHist.length > 0 ? textHist + commandSeparator + cin + outputSeparator + newText + directiveSeparator + nextDirective : newText + directiveSeparator + nextDirective;
  document.getElementById("consoleOut").innerHTML = textHist;
  document.getElementById("consoleOut").scrollTop = document.getElementById("consoleOut").scrollHeight;
}

function inConsoleBoxSubmit(e) {
  e.preventDefault();
  toConsole();
}

document.getElementById("consoleForm").addEventListener("submit", inConsoleBoxSubmit);