import getBMI from "./getBMI.js"
import { startPage } from "./startPage.js"
window.onload = function () {
    // const startPage = `
    // 身高：<input type="text" id="height"><br>
    // 體重：<input type="text" id="weight"><br>
    // BMI：<div id="bmi"></div><br>
    // <button id="cal">計算</button>
    // `
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("cal").onclick = function(){
        getBMI
        // const height = parseFloat(document.getElementById("height").value)
        // const weight = parseFloat(document.getElementById("weight").value)
        // const bmi = weight/(height*height)
        document.getElementById("bmi").innerHTML = bmi
    }

}