import { startPage } from "./startPage.js";
window.onload = function(){
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("insert").onclick = function(){ //新增

    }
    document.getElementById("update").onclick = function(){ //修改

    }
    document.getElementById("delete").onclick = function(){ //刪除

    }
    document.getElementById("select").onclick = function(){ //查詢
        axios.post("http://localhost/0606/DoSelect.php")
        .then(res => {
            let response = res['data']
            let str
            switch (response['status']) {
                case 200:
                    let rows = response['result']
                    str = `<table>`
                    rows.forEach(element => {
                        str += "<tr>"
                        str += "<td>" + element['id'] + "<td>"
                        str += "<td>" + element['name'] + "<td>"
                        str += "<td>" + element['addr'] + "<td>"
                        str += "<td>" + element['birth'] + "<td>"
                        str += "</tr>"
                        
                    });
                    str += '</table>'
                    break;
            
                default:
                    str = response['message']
                    break;
            }
            console.log(res)
            document.getElementById("content").innerHTML = str
        })
        .catch(err => {
            console.error(err); 
        })
    }
}