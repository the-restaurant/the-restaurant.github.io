function touchfunc(event) {
  let touchObj = event.changedTouches[0];
  document.getElementById("titles").style.fontSize = "300%";
  document.getElementsByClassName("buttonClass")[0].translate(touchObj.pageX, touchObj.pageY);
  document.getElementsByClassName("buttonClass")[0].width = "20em";
}

document.getElementById("pageBody").addEventListener("touchstart", touchfunc);
