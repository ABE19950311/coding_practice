<?php
// echo "hello world<br>";
// echo "テストです<br>";

// $price = 2000;
// $tax = 0.08;
// $total = $price*(1.0+$tax);
// echo "$price 円の税込価格は$total 円です<br>";

// if($total>=10000) {
//     echo "10000以上です<br>";
// }else {
//     echo "10000未満です<br>";
// }

// $array = [1,2,3,4,5];
// $sum = 0;
// for($i=0;$i<count($array);$i++) {
//     $sum+=$array[$i];
// }
// echo "データの合計は $sum です";

// foreach($array as $value) {
//     echo "$value <br>";
// }

// $hash = [
//     '国語' => 50,
//     '数学' => 60,
//     '英語' => 70,
//     "理科" => 85
// ]; //連想配列はforeachのみ(forでは処理できない)
// $tensu = 0;
// foreach($hash as $kamoku => $ten) {
//     $tensu+=$ten;
//     echo "$kamoku は$ten です<br>";
// }
// echo "合計は $tensu<br>";

// $fun = getValue(10,20);
// echo "関数の結果は$fun<br>";

// function getValue($data1,$data2) {
//     $test = $data1*$data2;
//     return $test;
// }

// $key=$_GET["key"];
// echo "<p>「[$key]」のデータ</p>";
// $data=getData($key);
// echo "<table>";
// printData($data);
// echo "</table>";

// function getData($key) {
//     $data=[
//         "taro" => ["taro@yamada","090-999-999"],
//         "hanao" => ["hanao@flowr","080-888-888"]
//     ];
//     if(isset($data[$key])) {
//         return $data[$key];
//     }else {
//         return ["notfound","..."];
//     }
// }

// function printData($arr) {
//     echo "<tr><td>[$arr[0]]</td><td>[$arr[1]]</td?</tr>";
// }

$msg="";
$result="名前を入力してください";
if(isset($_POST["msg"])) {
    $msg=$_POST["msg"];
    $result="ようこそ,{$msg}さん";
}

?>
<body>
    <h1>helloo!!</h1>
    <p><?php echo $result; ?></p>
    <form method="post" action="/hello.php">
        <input type="text" name="msg" value=<?php echo $msg; ?>>
        <input type="submit" value="送信">
    </form>
</body>








