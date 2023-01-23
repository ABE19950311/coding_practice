<?php session_start(); ?>
<?php
    $pdo=new PDO("mysql:host=localhost;dbname=backtest;charset=utf8",
                    "staff","password");
    if(isset($_SESSION["member"])) {
        $id=$_SESSION["member"]["id"];
        $sql=$pdo->prepare("select * from backtest where id!=? and username=?");
        $sql->execute([$id,$_POST["username"]]);
    }else {
        $sql=$pdo->prepare("select * from backtest where username=?");
        $sql->execute([$_POST["username"]]);
    }
    if(empty($sql->fetchAll())) {
        if(isset($_SESSION["member"])) {
            $sql=$pod->prepare("update backtest set username=?,password=? where id=?");
            $sql->execute([$_POST["username"],$_POST["password"],$id]);
            $_SESSION["member"]=[
                "id"=>$id,
                "username"=>$_POST["username"],
                "password"=>$_POST["password"],
            ];
            echo "ユーザ更新";
        }else {
        $sql=$pdo->prepare("insert into backtest values(null,?,?)");
        $sql->execute([$_POST["username"],$_POST["password"]]);
        echo "ユーザ登録済み";
    }
}else {
    echo "ユーザが既に使用されています";
}
?>