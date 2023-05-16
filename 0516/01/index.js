import { startPage } from "./startPage.js";

window.onload = function(){
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("name").onkeyup = function(){
        // console.log(document.getElementById("name").value)
        let data = {
            'name': document.getElementById("name").value
        }
        axios.post("http://localhost/0516/01/hello.php",Qs.stringify(data))
        .then(res => {
            let response = res['data']
            document.getElementById("content").innerHTML = response
        })
        .catch(err => {
            console.error(err); 
        })
    }
}