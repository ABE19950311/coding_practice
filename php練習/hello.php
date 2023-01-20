<?php
//echo "hello world<br>";
//echo "テストです<br>";

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

// $sum=0;

// if(isset($_POST["tanka"])&&isset($_POST["kosuu"])) {
//     $sum=$_POST["tanka"]*$_POST["kosuu"];
// }

// if(isset($_POST["mail"])) {
//     echo "情報送ります";
// }else {
//     echo "送りません";
// }

// switch($_POST["meal"]) {
//     case "和食":
//         echo "和食をだします";
//         break;
//     case "中華":
//         echo "中華だします";
//         break;
//     case "洋食":
//         echo "洋食だします";
//         break;
// }

// echo $_POST["seat"];

?>

<!-- <body>
    <form action="/hello.php" method="post">
        <input type="checkbox" name="mail">お買い得情報のメールを受け取る<br>
        <input type="submit" value="確定">
    </form>
</body> -->

<!-- <body>
    <form action="/hello.php" method="post">
        <p>食事を選択</p>
        <input type="radio" name="meal" value="和食" checked>和食<br>
        <input type="radio" name="meal" value="中華">中華<br>
        <input type="radio" name="meal" value="洋食">洋食<br>
        <input type="submit" value="確定">
    </form>
</body> -->

<!-- <body>
    <form action="/hello.php" method="post">
        <p>座席選択</p>
        <select name="seat">
            <option value="自由席">自由席</option>
            <option value="指定席">指定席</option>
            <option value="グリーン席">グリーン席</option>
        </select>
        <input type="submit" value="確定">
    </form>
</body> -->



<?php
$pdo=new PDO('mysql:host=localhost;dbname=shop;charset=utf8', #PDOでデータベースに接続する。識別情報を記述。
	'staff', 'password');

$sql=$pdo->prepare("select * from product where name=?"); #prepareメソッドでSQLの実行準備、SQLがセットされたPDOstatementインスタンスを返す。?の箇所に後から値を入れられる。
$sql->execute([$_POST["keyword"]]); #prepareで作成したSQL文の？に入れる値を配列にして渡す（複数の？に対応）

foreach($sql as $row) { #->queryの記述でqueryメソッドを呼び出し、sqlを実行
    echo "<p>$row[id]:$row[name]:$row[price]</p>"; #ダブルクォートで括れば変数値がそのまま適用される
}
?>

<form action="/hello.php" method="post">
    <input type="text" name="keyword">
    <input type="submit" value="検索">
</form>





