import startPage from "./startPage.js"
import selectProduct from "./selectProduct.js"

window.onload = function() {

  document.getElementById("root").innerHTML = startPage()
  selectProduct()

}