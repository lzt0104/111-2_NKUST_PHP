<?php
    $id= $_POST['id'];
    $name= $_POST['name'];
    $birth= $_POST['birth'];
    $addr= $_POST['addr'];
    $db_host = 'localhost';
    $db_name  = 'school';
    $db_user = 'root';
    $db_password = '';
    $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
    try{
        $conn = new PDO($dsn,$db_user,$db_password);
        $sql = "INSERT INTO `student` (`id`, `name`, `birth`, `addr`) VALUES (?, ?, ?, ?)"; //代值用?
        $stmt = $conn ->prepare($sql); //防止漏洞的可能性
        $result = $stmt ->execute(array($id,$name,$birth,$addr)); //先做完漏洞在做execute
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