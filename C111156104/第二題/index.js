import { startPage } from "./startPage.js";
window.onload = function () {
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("a").onkeyup = function () {
        const a = document.getElementById("a").value
        const b = document.getElementById("b").value
        const c = document.getElementById("c").value
        let money = b * 20 + 15 * c
        let i = 0
        if (money > a) {
            i = money - a
            document.getElementById("ans").style.color = "red"
            document.getElementById("ans").innerHTML = "不足" + i
        } else {
            i = a - money
            document.getElementById("ans").style.color = "blue"
            document.getElementById("ans").innerHTML = "剩下" + i
        }
    }
    document.getElementById("b").onkeyup = function () {
        const a = document.getElementById("a").value
        const b = document.getElementById("b").value
        const c = document.getElementById("c").value
        let money = b * 20 + 15 * c
        let i = 0
        if (money > a) {
            i = money - a
            document.getElementById("ans").style.color = "red"
            document.getElementById("ans").innerHTML = "不足" + i
        } else {
            i = a - money
            document.getElementById("ans").style.color = "blue"
            document.getElementById("ans").innerHTML = "剩下" + i
        }
    }
    document.getElementById("c").onkeyup = function () {
        const a = document.getElementById("a").value
        const b = document.getElementById("b").value
        const c = document.getElementById("c").value
        let money = b * 20 + 15 * c
        let i = 0
        if (money > a) {
            i = money - a
            document.getElementById("ans").style.color = "red"
            document.getElementById("ans").innerHTML = "不足" + i
        } else {
            i = a - money
            document.getElementById("ans").style.color = "blue"
            document.getElementById("ans").innerHTML = "剩下" + i
        }
    }
}