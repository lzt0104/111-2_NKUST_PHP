import { startPage } from "./startPage.js";
window.onload = function(){
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("cal").onclick = function(){
        let data = {
            "a" : document.getElementById("a").value,
            "b" : document.getElementById("b").value
        }
        axios.post("http://localhost/C111156104/1/cal.php",Qs.stringify(data)) //大小寫要注意^^
        .then(res =>{
            let response = res['data']
            document.getElementById("ans").innerHTML = response
        })
        .catch(err=>{
            document.getElementById("ans").innerHTML = err
        })
    }
}