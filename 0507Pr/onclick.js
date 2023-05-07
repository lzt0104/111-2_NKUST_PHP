function getRadioValue() {
    let radioButton = document.getElementsByName("member") 
    for (let i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) {
            return radioButton[i].value
        }
    }
}
function onclick(){
    document.getElementById("cal").onclick = function(){
        const item = document.getElementsByName("item")
        const money = document.getElementsByName("money")
        const math = document.getElementsByName("math")
        const member = document.getElementsByName("member")
        const memberValue = getRadioValue(member)
        let itemValue = new Array()
        let moneyValue = new Array()
        let mathValue = new Array()
        for (let i = 0; i < item.length; i++) {
            itemValue[i] = item[i].value
            moneyValue[i] = parseInt(money[i].value)
            mathValue[i] = parseInt(math[i].value) 
        }
        console.log(itemValue)
        console.log(moneyValue)
        console.log(mathValue)
        let smaillsum = 0
        for (let i = 0; i < itemValue.length; i++) {
            smaillsum += moneyValue[i]*mathValue[i]
        }
        console.log(smaillsum)
        console.log(memberValue)
        let msg = ""
        let mathValuesum = 0
        if (memberValue == "y"){
            msg += "親愛的顧客您好，您的餐點為<br>"
            for (let i = 0; i < itemValue.length; i++) {
                msg += itemValue[i] + ":" + moneyValue[i] + "*" + mathValue[i] + "=" + moneyValue[i]*mathValue[i]+"<br>"
                mathValuesum += mathValue[i]
            }
            msg += "會員八折：" +smaillsum+"*0.8"+"=" + smaillsum*0.8 + "元<br>" 
            msg += "總共"+mathValuesum+"份，共計"+smaillsum*0.8+"元"
            document.getElementById("cool").innerHTML = msg
        } else{
            msg += "親愛的顧客您好，您的餐點為<br>"
            for (let i = 0; i < itemValue.length; i++) {
                msg += itemValue[i] + ":" + moneyValue[i] + "*" + mathValue[i] + "=" + moneyValue[i]*mathValue[i]+"<br>"
                mathValuesum += mathValue[i]
            }
            msg += "總共"+mathValuesum+"份，共計"+smaillsum+"元"
            document.getElementById("cool").innerHTML = msg
        }
        
    }

}
export { onclick,getRadioValue }