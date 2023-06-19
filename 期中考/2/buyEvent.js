function buyEvent() {
  const money = parseInt(document.getElementById("money").value)
  const pencilPrice = parseInt(document.getElementById("pencilPrice").innerHTML)
  const eraserPrice = parseInt(document.getElementById("eraserPrice").innerHTML)
  let pencilNumber = parseInt(document.getElementById("pencilNumber").value)
  let eraserNumber = parseInt(document.getElementById("eraserNumber").value)
  if (isNaN(money) || isNaN(pencilNumber) || isNaN(eraserNumber)) return false
  if (pencilNumber < 0) {
    document.getElementById("pencilNumber").value = 0
    pencilNumber = 0
  }
  if (eraserNumber < 0) {
    document.getElementById("eraserNumber").value = 0
    eraserNumber = 0
  }

  const sellingPrice = pencilPrice * pencilNumber + eraserPrice * eraserNumber
  const change = money - sellingPrice
  if (change >= 0) {
    document.getElementById("answer").style.color = "blue"
    document.getElementById("answer").innerHTML = "剩下 " + change
  } else {
    document.getElementById("answer").style.color = "red"
    document.getElementById("answer").innerHTML = "不足 " + Math.abs(change)
  }
}

export default buyEvent