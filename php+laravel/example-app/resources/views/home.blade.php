<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>hello world!!!</p>
    @if(Auth::check())
        <p>{{\Auth::user()->name}}</p>
        <p><a href="/logout">ログアウト</a></p>
    @else
        <p>ゲスト</p>
        <p><a href="/login">ログイン</a><a href="/register">会員登録</a></p>
</body>
</html>