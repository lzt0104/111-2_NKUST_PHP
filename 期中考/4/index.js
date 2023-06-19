import startPage from "./startPage.js"
import cal from "./cal.js";

window.onload = function() {

  document.getElementById("root").innerHTML = startPage()

  document.getElementById("cal").onclick = function () {
    cal()
  }

}