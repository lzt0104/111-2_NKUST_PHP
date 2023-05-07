function startPage(){
    const startPage = `
    <table border="1">
        <tr><td>品項</td><td>價格</td><td>數量</td></tr>
        <tr><td><input type="text" name="item"></td><td><input type="text" name="money"></td><td><select name="math"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></td></tr>
        <tr><td><input type="text" name="item"></td><td><input type="text" name="money"></td><td><select name="math"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></td></tr>
        <tr><td><input type="text" name="item"></td><td><input type="text" name="money"></td><td><select name="math"><option value="1">1</option><option value="2">2</option><option value="3">3</option></select></td></tr>
    </table>
    <input type="radio" name="member" value="y">會員<input type="radio" name="member" value="n">非會員
    <button id="cal">計算</button>
    <div><p id="cool"></p></div>
    `
    return startPage
}
export { startPage }