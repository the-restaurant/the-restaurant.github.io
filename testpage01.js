function touchfunc(event) {
  document.getElementById("titles").style.fontSize = "300%";
  document.getElementsByClassName("buttonClass")[0].style.width = "200px";
  document.getElementsByClassName("buttonClass")[0].style.left = event.touches[0].pageX;
  document.getElementsByClassName("buttonClass")[0].style.height = event.touches[0].pageY;
}

document.getElementById("pageBody").addEventListener("touchstart", touchfunc);
