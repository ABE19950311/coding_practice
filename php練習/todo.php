<?php require "./header.php"; ?>
<?php session_start(); ?>

<?php
$pdo=new PDO("mysql:host=localhost;dbname=backtest;charset=utf8",
                "staff","password");
$id=$_SESSION["member"]["id"];
$getdata=$pdo->query("select * from todo");
$data=$getdata->fetchAll(PDO::FETCH_ASSOC);
$sql=$pdo->prepare("insert into todo values(null,?,?)");
$del=$pdo->prepare("delete from todo where id=?");
$upd=$pdo->prepare("update todo set detail=? where id=?");
if(empty($_POST["detail"])) {
    echo "todoを入力";
}else if($sql->execute([$id,htmlspecialchars($_POST["detail"])])) {
    echo "作成しました";
}else {
    echo "失敗しました";
    ini_set('display_errors', "On");
}

if(isset($_GET["id"])) {
    $del->execute([$_GET["id"]]);
    echo "$_GET[id]";
    echo "削除しました";
}

if(isset($_POST["updid"])&&isset($_POST["update"])) {
    $upd->execute([$_POST["update"],$_POST["updid"]]);
    echo "$_POST[update]";
    echo "$_POST[updid]";
    echo "更新しました";
}

echo "$_POST[update]";
echo "$_POST[updid]";

?>

<body>
    <h1>TODO入力</h1>
    <form action="./todo.php" method="post">
        <input type="text" name="detail">
        <input type="submit" value="送信">
    </form>
    <?php
    echo "<table>\n";
    echo "<tr>\n";
    echo "<th>TODO</th>\n";
    echo "</tr>\n";
    foreach($data as $user) {
                echo "<tr>\n";
                echo "<td>" . $user["detail"] . "</td>\n";
                echo "<td>\n";
                echo "<a href=todo.php?id=" . $user["id"] . ">削除</a>\n";
                echo "</td>\n";
                echo "<td>\n";
                echo "<form action=./todo.php method=post>";
                echo "<input type=hidden name=updid value=$user[id]>\n";
                echo "<input type=text name=update>\n";
                echo "<input type=submit value=更新>\n";
                echo "</form>";
                echo "</td>\n";
                echo "</tr>\n";
    }
    echo "</table>\n";
    ?>
</body>

<?php require "./footer.php"; ?>