import { startPage } from "./startPage.js";
import { a } from "./a.js";
import { b } from "./b.js";
import { c } from "./c.js";
import { d } from "./d.js";
import { e } from "./e.js";
import { f } from "./f.js";
window.onload = function () {
    document.getElementById("root").innerHTML = startPage()
    const op = document.getElementById("op")
    document.getElementById("op").onchange = function () {
        if (op.value == "0") {
            startPage()
        }else if (op.value == "1"){
            a()
        }else if (op.value == "2"){
            b()
        }else if (op.value == "3"){
            c()
        }else if (op.value == "4"){
            d()
        }else if (op.value == "5"){
            e()
        }else if (op.value == "6"){
            f()
        }
    }
}