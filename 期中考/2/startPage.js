function startPage() {
  const startPage =`
    <div><span>小明擁有</span><input type="number" id="money" min="0" value="100"></div>
    <div><span></span><span>單價</span><span>數量</span></div>
    <div>
      <span>鉛筆</span>
      <span id="pencilPrice">20</span>
      <span><input type="number" id="pencilNumber" min="0" value="1"></span>
    </div>
    <div>
      <span>橡皮差</span>
      <span id="eraserPrice">15</span>
      <span><input type="number" id="eraserNumber" min="0" value="1"></span>
    </div>
    <div><span>小明</span><span id="answer"></span></div>
  `;
  return startPage
}

export default startPage