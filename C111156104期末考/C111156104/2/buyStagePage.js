function buyStagePage() {
  const buyStagePage = `
  訂單編號：<input type="text" id="orderid"> <br>
  <div class="header">
    <span class="productName"></span>
    <span>單價</span>
    <span>數量</span>
  </div>
  <div class="header2">
    <span class="productName" id="productName">
    </span><span id="productPrice"></span>
    <span><input type="number" id="productNumber" min="0" value="1"></span>
  </div>
  運送地址：<input type="text" id="addr"> <br>
  總金額：<span id="total"></span> <br>
  <button id="cal">下單</button>
  <div id="answer"></div> 
  `;
  return buyStagePage
}

export default buyStagePage