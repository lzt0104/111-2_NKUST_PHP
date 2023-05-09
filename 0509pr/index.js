import { startPage } from "./startPage.js";
import { plus } from "./plus.js";
window.onload = function () {
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("cal").onclick = function () {
        const a = document.getElementById("a").value
        const b = document.getElementById("b").value
        let ans = parseInt(a) + parseInt(b)
        document.getElementById("ans").value = ans
    }
}