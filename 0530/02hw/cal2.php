<?php
    $a = $_POST['a'];
    $b = $_POST['b'];
    $r = 1;
    $ans;
    while ($r!=0){
        $r = $a%$b;
        $a = $b;
        $b = $r;
    }
    $ans = $a;
    $response = json_encode($ans);
    echo $response;
?>