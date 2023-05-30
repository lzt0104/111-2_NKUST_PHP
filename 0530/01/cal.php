<?php
    $chi = $_POST['chi'];
    $eng = $_POST['eng'];
    $math = $_POST['math'];
    $sum = $chi+$eng+$math;
    $avg = $sum/3;
    $response = json_encode($avg);
    echo $response;
?>
