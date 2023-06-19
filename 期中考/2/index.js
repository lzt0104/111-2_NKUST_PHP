import startPage from "./startPage.js"
import buyEvent from "./buyEvent.js"

window.onload = function() {

  document.getElementById("root").innerHTML = startPage()

  buyEvent()
  document.getElementById("money").onchange = function() { buyEvent() }
  document.getElementById("pencilNumber").onchange = function() { buyEvent() }
  document.getElementById("eraserNumber").onchange = function() { buyEvent() }

}