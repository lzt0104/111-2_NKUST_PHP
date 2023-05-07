import { startPage } from "./startPage.js";
import { onclick,getRadioValue } from "./onclick.js";
window.onload = function(){
    document.getElementById("root").innerHTML = startPage()
    getRadioValue()
    onclick()
}