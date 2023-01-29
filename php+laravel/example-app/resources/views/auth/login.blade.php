<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    @isset($errors)
    <p>{{$errors->first("message")}}</p>
    @endisset
    <form action="/login" name="loginform" method="post">
        {{csrf_field()}}
        <dl>
            <dt>メールアドレス</dt>
            <dd>
                <input type="text" name="email" value="{{old('email')}}">
            </dd>
            <dt>パスワード</dt>
            <dd>
                <input type="password" name="password">
            </dd>
        </dl>
        <button type="submit" name="action" value="send">ログイン</button>
    </form>
</body>
</html>