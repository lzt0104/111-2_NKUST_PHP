function buyEvent() {
  const productName = document.getElementById("productName").innerHTML
  const productPrice = document.getElementById("productPrice").innerHTML
  const productNumber = parseInt(document.getElementById("productNumber").value)
  const radioButtons = document.querySelectorAll('input[type="radio"]')
  const storedValue = parseInt(document.getElementById("storedValue").value)
  const benefitPoints = parseInt(document.getElementById("benefitPoints").value)
  let payMethod = null
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      payMethod = radioButton.value
      break
    }
  }

  const total = productPrice * productNumber
  let answer = `
    <br><br>
    <div>親愛的顧客，你的支付清單如下：</div>
    <div>${productName}：${productPrice} * ${productNumber} = ${total}</div>
    <div>使用${payMethod}支付</div>
  `
  if (payMethod == "現金") {
    const sellingPrice = total
    answer += `<div>商品總價：${sellingPrice}</div>`
    answer += `<div>福利點數：${benefitPoints} + ${sellingPrice} * 0.05 = ${benefitPoints + sellingPrice * 0.05}</div>`
  } else if (payMethod == "儲值金") {
    const sellingPrice = total * 0.9
    if (storedValue < sellingPrice) {
      answer += `<div>${payMethod}不足</div>`
    } else {
      answer += `<div>商品總價：${total} * 0.9 = ${sellingPrice}</div>`
      answer += `<div>儲值金：${storedValue} - ${sellingPrice} = ${storedValue - sellingPrice}</div>`
      answer += `<div>福利點數：${benefitPoints} + ${sellingPrice} * 0.1 = ${benefitPoints + sellingPrice * 0.1}</div>`
    }
  } else {
    const sellingPrice = total
    if (benefitPoints < sellingPrice) {
      answer += `<div>${payMethod}不足</div>`
    } else {
      answer += `<div>商品總價：${sellingPrice}</div>`
      answer += `<div>福利點數：${benefitPoints} - ${sellingPrice} = ${benefitPoints - sellingPrice}</div>`
    }
  }
  document.getElementById("answer").innerHTML = answer
}

export default buyEvent