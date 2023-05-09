function c() {
    document.getElementById("root2").innerHTML = `<table>
        <tr><td></td><td>單價</td><td>數量</td></tr><br>
        <tr><td>【小米】65型</td><td>$15,990</td><td><input type="text" id="m"></td></tr>
    </table>
    <p>付費方式：<input type="radio" name="member" value="cash">現金<input type="radio" name="member" value="icash">儲值金<input type="radio" name="member" value="dot">福利點數</p>
    <p>現有儲值金：<input type="text"id="icash"> 現有福利點數：<input type="text" id="dot"></p>`
}
export { c }