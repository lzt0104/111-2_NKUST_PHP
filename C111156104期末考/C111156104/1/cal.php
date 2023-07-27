<?php
    $a = $_POST['a'];
    $b = $_POST['b'];
    $c = ($b-$a-0.001425*$a-0.004425*$b)/$a;
    $response = json_encode($c);
    echo $response;
?>