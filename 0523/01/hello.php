<?php
$name = $_POST['name'];
$msg = $name.'你好';
$response = json_encode($msg);
echo $response;