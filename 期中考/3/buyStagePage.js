function buyStagePage() {
  const buyStagePage =`
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
    <div class="payMethod">
      <span>付費方式：</span>
      <span>
        <input type="radio" name="Pay" value="現金" checked>現金
        <input type="radio" name="Pay" value="儲值金">儲值金
        <input type="radio" name="Pay" value="福利點數">福利點數
      </span>
    </div>
    <div>
      <span>現有儲值金：</span>
      <input type="number" id="storedValue" min="0" value="0">
    </div>
    <div>
      <span>現有福利點數：</span>
      <input type="number" id="benefitPoints" min="0" value="0">
    </div>
    <div><button id="cal">計算</button></div>
    <div id="answer"></div> 
  `;
  return buyStagePage
}

export default buyStagePage