<?php
    $id= $_POST['id'];
    $name= $_POST['name'];
    $addr= $_POST['addr'];
    $num= $_POST['num'];
    $db_host = 'localhost';
    $db_name  = '3Cstore';
    $db_user = 'root';
    $db_password = '';
    $dsn = "mysql:host=$db_host;dbname=$db_name;charset=utf8";
    try{
        $conn = new PDO($dsn,$db_user,$db_password);
        $sql = "INSERT INTO `orders` (`id`, `product_id`, `num`, `addr`) VALUES (?, ?, ?, ?)"; //代值用?
        $stmt = $conn ->prepare($sql); //防止漏洞的可能性
        if ($name == "【TOSHIBA 東芝】58型"){
            $product_id = "shop01";
        }
        if ($name == "【JVC】50型"){
            $product_id = "shop02";
        }
        if ($name == "【小米】65型"){
            $product_id = "shop03";
        }
        if ($name == "【HERAN 禾聯】55型"){
            $product_id = "shop04";
        }
        if ($name == "【DigiKing】43型"){
            $product_id = "shop05";
        }
        if ($name == "【Haier 海爾】50型"){
            $product_id = "shop06";
        }
        $result = $stmt ->execute(array($id,$product_id,$num,$addr)); //先做完漏洞在做execute
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