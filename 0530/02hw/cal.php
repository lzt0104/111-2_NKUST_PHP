<?php
    $a = $_POST['a'];
    $b = $_POST['b'];
    $ans = 0;
    for ($i=$a;$i<=$b;$i++){
        $ans += +$i;
    }
    $response = json_encode($ans);
    echo $response;
?>