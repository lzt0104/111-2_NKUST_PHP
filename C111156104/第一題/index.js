import { startPage } from "./startPage.js";
window.onload = function(){
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("cal").onclick = function(){
        const a = parseFloat(document.getElementById("a").value)
        const b = parseFloat(document.getElementById("b").value)
        let ans = (b-a-0.001425*a-0.004425*b)/a
        document.getElementById("ans").innerHTML = "報酬率為："+ans
    }
}