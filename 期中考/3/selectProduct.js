import buyStagePage from "./buyStagePage.js";
import buyEvent from "./buyEvent.js"

function selectProduct() {

  document.getElementById("Product1").onclick = function() {
    const productName = document.getElementById("Product1Name").innerHTML
    const productPrice = document.getElementById("Product1Price").innerHTML.substring(1)
    showBuyStagePage(productName, productPrice)
  }

  document.getElementById("Product2").onclick = function() {
    const productName = document.getElementById("Product2Name").innerHTML
    const productPrice = document.getElementById("Product2Price").innerHTML.substring(1)
    showBuyStagePage(productName, productPrice)
  }

  document.getElementById("Product3").onclick = function() {
    const productName = document.getElementById("Product3Name").innerHTML
    const productPrice = document.getElementById("Product3Price").innerHTML.substring(1)
    showBuyStagePage(productName, productPrice)
  }
  
  document.getElementById("Product4").onclick = function() {
    const productName = document.getElementById("Product4Name").innerHTML
    const productPrice = document.getElementById("Product4Price").innerHTML.substring(1)
    showBuyStagePage(productName, productPrice)
  }

  document.getElementById("Product5").onclick = function() {
    const productName = document.getElementById("Product5Name").innerHTML
    const productPrice = document.getElementById("Product5Price").innerHTML.substring(1)
    showBuyStagePage(productName, productPrice)
  }
  
  document.getElementById("Product6").onclick = function() {
    const productName = document.getElementById("Product6Name").innerHTML
    const productPrice = document.getElementById("Product6Price").innerHTML.substring(1)
    showBuyStagePage(productName, productPrice)
  }
}

function showBuyStagePage(productName, productPrice) {
  document.getElementById("root").innerHTML = buyStagePage()
  document.getElementById("productName").innerHTML = productName
  document.getElementById("productPrice").innerHTML = productPrice
  document.getElementById("cal").onclick = function() {
    buyEvent()
  }
}

export default selectProduct