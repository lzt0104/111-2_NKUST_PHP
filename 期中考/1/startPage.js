function startPage() {
  const startPage =`
    買入價格：<input type="text" id="buyPrice"> <br>
    賣出價格：<input type="text" id="salePrice"> <br>
    <span id="answerlabel">報酬率為：</span><span id="answer"></span> 
    <br>
    <button id="cal">計算</button>
  `;
  return startPage
}

export default startPage