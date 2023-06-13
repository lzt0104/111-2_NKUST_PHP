<?php
    $db_host = 'localhost';
    $db_name  = 'school';
    $db_user = 'root';
    $db_password = '';
    $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
    try{
        $conn = new PDO($dsn,$db_user,$db_password);
        $sql = "INSERT INTO `student` (`id`, `name`, `birth`, `addr`) VALUES ('C111162102', 'Andy Liu', '2005-04-03', '台北市')";
        $stmt = $conn ->prepare($sql);
        $result = $stmt ->execute();
        if ($result){
            $count = $stmt ->rowCount();
            if ($count<1){
                $response['status']=204; //No content
                $response['message']="新增失敗";
            }
            else{
                $response['status']=200; //OK
                $response['message']="新增成功";
            }
        }
        else{
            $response['status']=400; //Bad news
            $response['message']="SQL錯誤"; 
        }
    }catch (PDOException $e){
        $response['status']=$e->getCode;
        $response['message']=$e->getMessage();
    }
    echo json_encode($response);
?>