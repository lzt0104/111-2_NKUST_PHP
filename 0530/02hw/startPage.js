function startPage(){
    const startPage = `
    請輸入兩數<br>
    a：<input type="text" id="a"><br>
    b：<input type="text" id="b"><br>
    <button id="cal">計算a+....+b</button><br>
    <div><span id="ans"></span></div>
    
    請輸入兩數<br>
    a：<input type="text" id="a1"><br>
    b：<input type="text" id="b1"><br>
    <button id="cal2">計算ab最大公因數</button>
    <div><span id="ans2"></span></div>
    `
    return startPage
}
export {startPage}