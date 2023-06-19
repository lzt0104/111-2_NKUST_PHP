import startPage from "./startPage.js"
import getRateOfReturn from "./rateOfReturn.js"

window.onload = function() {

  document.getElementById("root").innerHTML = startPage()
  document.getElementById("answerlabel").style.display = "none"

  document.getElementById("cal").onclick = function() {
    const buyPrice = parseFloat(document.getElementById("buyPrice").value)
    const salePrice = parseFloat(document.getElementById("salePrice").value)
    document.getElementById("answerlabel").style.display = "inline"
    document.getElementById("answer").innerText = getRateOfReturn(buyPrice, salePrice)
  }

}