import { startPage } from "./startPage.js";
window.onload = function () {
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("cal").onclick = function () {
        const one = document.getElementsByName("1")
        const two = document.getElementsByName("2")
        const three = document.getElementsByName("3")
        let oneValue = new Array()
        let twoValue = new Array()
        let threeValue = new Array()
        for (let i = 0; i < one.length; i++) {
            oneValue[i] = parseInt(one[i].value)
            twoValue[i] = parseInt(two[i].value)
            threeValue[i] = parseInt(three[i].value)
        }
        console.log(threeValue)
    }
}