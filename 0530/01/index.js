import { startPage } from "./startPage.js";

window.onload = function(){
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("cal").onclick = function(){
        let data = {
            "chi" : document.getElementById("chi").value,
            "eng" : document.getElementById("eng").value,
            "math" : document.getElementById("math").value
        }
        axios.post("http://localhost/0530/01/cal.php",Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            document.getElementById("avg").innerHTML=response;
            if (response>=60){
                document.getElementById("avg").style.color = "blue"
            }else{
                document.getElementById("avg").style.color = "red"
            }
        })
        .catch(err => {
            console.error(err); 
        })  
    }
}