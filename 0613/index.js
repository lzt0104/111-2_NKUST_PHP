import { startPage } from "./startPage.js";
window.onload = function(){
    document.getElementById("root").innerHTML = startPage()
    document.getElementById("insert").onclick = function(){ //新增
        const insertPage = `
        學號：<input type="text" id="id"><br>
        姓名：<input type="text" id="name"><br>
        住址：<input type="text" id="addr"><br>
        生日：<input type="text" id="birth"><br>
        <button id="doinsert">新增</button>
        `
        document.getElementById("content").innerHTML = insertPage
        document.getElementById("doinsert").onclick = function(){
            let data = {
                "id" : document.getElementById("id").value,
                "name" : document.getElementById("name").value,
                "addr" : document.getElementById("addr").value,
                "birth" : document.getElementById("birth").value
            }
            axios.post("http://localhost/0613/DoInsert.php",Qs.stringify(data)) //大小寫要注意^^
            .then(res =>{
                let response = res['data']
                let str = response['message']
                document.getElementById("content").innerHTML = str
            })
            .catch(err=>{
                document.getElementById("content").innerHTML = err
            })
        }

    }
    document.getElementById("update").onclick = function(){ //修改

    }
    document.getElementById("delete").onclick = function(){ //刪除

    }
    document.getElementById("select").onclick = function(){ //查詢
        axios.post("http://localhost/0613/DoSelect.php")
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