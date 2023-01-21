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
// $pdo=new PDO('mysql:host=localhost;dbname=shop;charset=utf8', #PDOでデータベースに接続する。識別情報を記述。
// 	'staff', 'password');

// $sql=$pdo->prepare("select * from product where name like ?"); #prepareメソッドでSQLの実行準備、SQLがセットされたPDOstatementインスタンスを返す。?の箇所に後から値を入れられる。
// $sql->execute(["%".$_POST["keyword"]."%"]); #prepareで作成したSQL文の？に入れる値を配列にして渡す（複数の？に対応）

// foreach($sql as $row) { #->queryの記述でqueryメソッドを呼び出し、sqlを実行
//     echo "<p>$row[id]:$row[name]:$row[price]</p>"; #ダブルクォートで括れば変数値がそのまま適用される
// }

// $pdo=new PDO("mysql:host=localhost;dbname=shop;charset=utf8","staff","password");
// $sql=$pdo->prepare("insert into product values(null,?,?)");
// if(empty($_POST["name"])) {
//     echo "商品名を入力";
// }else if(!preg_match("/^[0-9]+$/",$_POST["price"])) {
//     echo "価格を整数で入力";
// }else if($sql->execute([htmlspecialchars($_POST["name"]),$_POST["price"]])) {
//     echo "追加しました";
// }else {
//     echo "失敗しました";
// }

?>

<!-- <form action="/hello.php" method="post">
    商品名<input type="text" name="name">
    価格<input type="text" name="price">
    <input type="submit" value="追加">
</form> -->

<?php
// $pdo=new PDO("mysql:host=localhost;dbname=shop;charset=utf8","staff","password");
// $sql=$pdo->prepare("update product set name=?,price=? where id=?");

// if(empty($_POST["name"])) {
//     echo "商品名を入力";
// }else if(!preg_match("/^[0-9]+$/",$_POST["price"])) {
//     echo "価格を整数で入力";
// }else if($sql->execute([htmlspecialchars($_POST["name"]),$_POST["price"],$_POST["id"]])) {
//     echo "更新しました";
// }else {
//     echo "失敗しました";
// }

// ?>


<!-- // <div class="th0">商品番号</div>
// <div class="th1">商品名</div>
// <div class="th1">価格</div> -->

// <?php
// $pdo=new PDO('mysql:host=localhost;dbname=shop;charset=utf8',
// 	'staff', 'password');
// foreach ($pdo->query('select * from product') as $row) {
// 	echo '<form action="/hello.php" method="post">';
// 	echo '<input type="hidden" name="id" value="', $row['id'], '">';
// 	echo '<div class="td0">', $row['id'], '</div> ';
// 	echo '<div class="td1">';
// 	echo '<input type="text" name="name" value="', $row['name'], '">';
// 	echo '</div> ';
// 	echo '<div class="td1">';
// 	echo ' <input type="text" name="price" value="', $row['price'], '">';
// 	echo '</div> ';
// 	echo '<div class="td2"><input type="submit" value="更新"></div>';
// 	echo '</form>';
// 	echo "\n";
// }
// ?>


<?php
$pdo=new PDO("mysql:host=localhost;dbname=shop;charset=utf8","staff","password");
$sql=$pdo->prepare("delete from product where id=?");
if($sql->execute([$_GET["id"]])) {
    echo "削除しました";
}else {
    echo "失敗しました";
}
?>

<table>
<tr><th>商品番号</th><th>商品名</th><th>価格</th><th></th></tr>
<?php
$pdo=new PDO('mysql:host=localhost;dbname=shop;charset=utf8',
	'staff', 'password');
foreach ($pdo->query('select * from product') as $row) {
	echo '<tr>';
	echo '<td>', $row['id'], '</td>';
	echo '<td>', $row['name'], '</td>';
	echo '<td>', $row['price'], '</td>';
	echo '<td>';
	echo '<a href="/hello.php?id=', $row['id'], '">削除</a>';
	echo '</td>';
	echo '</tr>';
	echo "\n";
}
?>
</table>