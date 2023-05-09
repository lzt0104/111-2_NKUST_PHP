function b() {
    document.getElementById("root2").innerHTML = `<table>
        <tr><td></td><td>單價</td><td>數量</td></tr><br>
        <tr><td>【JVC】50型</td><td>$10,988</td><td><input type="text" id="m"></td></tr>
    </table>
    <p>付費方式：<input type="radio" name="member" value="cash">現金<input type="radio" name="member" value="icash">儲值金<input type="radio" name="member" value="dot">福利點數</p>
    <p>現有儲值金：<input type="text"id="icash"> 現有福利點數：<input type="text" id="dot"></p><br><button id="cal">計算</button>`
    const member = document.getElementsByName("member")
    const m = document.getElementById("m").value
    const t = m * 10988
    const dt = 0
    const tt = 0
    let msg = ""
    const memberValue = getRadioValue(member)
    const icash = document.getElementById("icash").value
    const dot = document.getElementById("dot").value
    const dtt = dt + dot
    document.getElementById("cal").onclick = function () {
        if (memberValue == "cash") {
            tt = t
            dt = t * 0.05
            msg += "親愛的顧客，您的支付清單如下:<br>【TOSHIBA 東芝】58型:12999*" + m + t + "<br>" + "使用現金付款<br>" + "商品總價:" + t + "<br>福利點數:" + dot + "+" + t + "*0.05=" + dtt
            document.getElementById("root3").innerHTML = msg
        }else if (memberValue == "icash"){
            tt = t *0.9
            dt = t*0.1
            msg += "親愛的顧客，您的支付清單如下:<br>【TOSHIBA 東芝】58型:12999*" + m + t + "<br>" + "使用儲值金支付<br>" + "商品總價:" + t + "<br>福利點數:" + dot + "+" + t + "*0.1=" + dtt
            document.getElementById("root3").innerHTML = msg
        }else{
            dt = dot-t
            tt = t
            msg += "親愛的顧客，您的支付清單如下:<br>【TOSHIBA 東芝】58型:12999*" + m + t + "<br>" + "使用福利點數支付<br>" + "商品總價:" + t + "<br>福利點數:" + dot + "-" + t + "*0.1=" + dt
            document.getElementById("root3").innerHTML = msg
        }
    }

}
export { b }