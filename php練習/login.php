<?php require "./header.php"; ?>
<?php session_start(); ?>
<?php
$pdo=new PDO("mysql:host=localhost;dbname=backtest;charset=utf8",
                "staff","password");
$sql=$pdo->prepare("select * from member where username=? and password=?");
$sql->execute([$_POST["user"],$_POST["password"]]);

foreach($sql as $row) {
    $_SESSION["member"]=[
        "id"=>$row["id"],
        "username"=>$row["username"],
        "password"=>$row["password"]
    ];
}

if(isset($_SESSION["member"])) {
    header("Location:./todo.php"); #header()で画面遷移処理
    exit(); #処理ここで停止
}else {
    echo "失敗しました";
}
?>

<body>
    <form action="./login.php" method="post">
        ユーザ名<input type="text" name="user"><br>
        パスワード<input type="text" name="password"><br>
        <input type="submit" value="送信">
    </form>
</body>

<?php require "./footer.php"; ?>
