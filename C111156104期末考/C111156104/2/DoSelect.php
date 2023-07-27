<?php
    $db_host = 'localhost'; //資料庫網址
    $db_name = '3Cstore'; //資料庫名稱
    $db_user = 'root'; //資料庫帳號
	$db_password = ''; //資料庫密碼
    $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
    // 
    $conn = NEW PDO($dsn,$db_user,$db_password); //物件導向
    $sql = "SELECT * FROM `product`"; //查詢資料表'student'為資料表名稱
    $stmt = $conn->prepare($sql);
    $result = $stmt->execute();
    if ($result){
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response['status'] = 200;
        $response['message'] = "查詢成功";
        $response['result'] = $rows;
        echo
    }else {
        $response['status'] = 400;
        $response['message'] = "SQL錯誤";
    }
    $htmls = '<table id="buyList"><tr>';
    $i = 0;
    foreach ($row as $rows) {
        $i++;
        if ($i == 0){
            $htmls .= '<td id="Product1"><div id="Product1Name">"'. $row[name] .'"</div><div id="Product1Price">"'. $row[price] .'"</div></td>'
        }
        if ($i == 1){
            $htmls .= '<td id="Product2"><div id="Product2Name">"'. $row[name] .'"</div><div id="Product2Price">"'. $row[price] .'"</div></td>'
        }
        if ($i == 2){
            $htmls .= '<td id="Product3"><div id="Product3Name">"'. $row[name] .'"</div><div id="Product3Price">"'. $row[price] .'"</div></td>'
        }
        if ($i == 3){
            $htmls .= '<td id="Product4"><div id="Product4Name">"'. $row[name] .'"</div><div id="Product4Price">"'. $row[price] .'"</div></td>'
        }
        if ($i == 4){
            $htmls .= '<td id="Product5"><div id="Product5Name">"'. $row[name] .'"</div><div id="Product5Price">"'. $row[price] .'"</div></td>'
        }
        if ($i == 5){
            $htmls .= '<td id="Product6"><div id="Product6Name">"'. $row[name] .'"</div><div id="Product6Price">"'. $row[price] .'"</div></td>'
        }
        // $htmls = "<tr><td id="Product1Name">" . $row[name] . "</td></tr>"
        // $htmls = "<tr><td>" . $row[price] . "</td></tr>"
    }
    $htmls .= '</tr></table>';
    echo json_encode($response);
    echo json_eccode($html);
?>