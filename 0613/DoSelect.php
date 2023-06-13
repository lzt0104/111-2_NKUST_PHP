<?php
    $db_host = 'localhost'; //資料庫網址
    $db_name = 'school'; //資料庫名稱
    $db_user = 'root'; //資料庫帳號
	$db_password = ''; //資料庫密碼
    $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
    // 
    $conn = NEW PDO($dsn,$db_user,$db_password); //物件導向
    $sql = "SELECT * FROM `student`"; //查詢資料表'student'為資料表名稱
    $stmt = $conn->prepare($sql);
    $result = $stmt->execute();
    if ($result){
        $row = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $response['status'] = 200;
        $response['message'] = "查詢成功";
        $response['result'] = $row;
    }else {
        $response['status'] = 400;
        $response['message'] = "SQL錯誤";
    }
    echo json_encode($response);
?>