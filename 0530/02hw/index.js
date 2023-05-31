import { startPage } from "./startPage.js";
window.onload = function(){
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("cal").onclick = function(){
        let data = {
            "a" : document.getElementById("a").value,
            "b" : document.getElementById("b").value,
        }
        axios.post("http://localhost/0530/02hw/cal.php",Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            document.getElementById("ans").innerHTML="a+....+b的值為："+response;
        })
        .catch(err => {
            console.error(err); 
        })  
    }
    document.getElementById("cal2").onclick = function(){
        let data = {
            "a" : document.getElementById("a1").value,
            "b" : document.getElementById("b1").value,
        }
        axios.post("http://localhost/0530/02hw/cal2.php",Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            document.getElementById("ans2").innerHTML="ab最大公因數為："+response;
        })
        .catch(err => {
            console.error(err); 
        })  
    }
}