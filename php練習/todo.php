<?php require "./header.php"; ?>
<?php session_start(); ?>

<?php
$pdo=new PDO("mysql:host=localhost;dbname=backtest;charset=utf8",
                "staff","password");
$id=$_SESSION["member"]["id"];
$data=$pdo->query("select * from todo");
$sql=$pdo->prepare("insert into todo values(null,?,?)");
if(empty($_POST["detail"])) {
    echo "todoを入力";
}else if($sql->execute([$id,htmlspecialchars($_POST["detail"])])) {
    echo "作成しました";
}else {
    echo "失敗しました";
    ini_set('display_errors', "On");
}

?>

<body>
    <h1>TODO入力</h1>
    <form action="./todo.php" method="post">
        <input type="text" name="detail">
        <input type="submit" value="送信">
    </form>
    <?php
    while($row=$data->fetch(PDO::FETCH_ASSOC)) { #FETCH~ フェッチモード（PDOでデータベースから取り出したデータの配列の形式を指定する）
        print_r($row); #print_r　配列をわかりやすく表示してくれる
        echo("<br/>");
    }
    ?>
</body>

<?php require "./footer.php"; ?>