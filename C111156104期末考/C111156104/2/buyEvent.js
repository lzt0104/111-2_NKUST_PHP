function buyEvent() {
  const productName = document.getElementById("productName").innerHTML
  const productPrice = document.getElementById("productPrice").innerHTML
  const productNumber = parseInt(document.getElementById("productNumber").value)
  const sendaddr = document.getElementById("addr").value


  const total = productPrice * productNumber
  document.getElementById("total").innerHTML = total
  
}

export default buyEvent