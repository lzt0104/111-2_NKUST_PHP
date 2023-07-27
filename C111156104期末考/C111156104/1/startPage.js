function startPage(){
    const startpage = `
    <span>股票買入價格：<input type="text" id="a"></span>
    <span>賣出價格：<input type="text" id="b"></span>
    <span id="ans"></span>
    <button id="cal">計算報酬率</button>
    `
    return startpage
}
export {startPage}