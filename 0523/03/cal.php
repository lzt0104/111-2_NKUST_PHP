<?php
    $a = $_POST['a'];
    $b = $_POST['b'];
    $op = $_POST['op'];
    $ans;
    switch ($op){   #不用""
        case '+':
            $ans = $a + $b;
            break;
        case '-':
            $ans = $a - $b;
            break;
        case '*':
            $ans = $a * $b;
            break;
        case '/':
            $ans = $a / $b;
            break;
        default:
            # code...
            break;
    }
    $response = json_encode($ans);
    echo $response;
?>
