<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>掲示板</title>
</head>
<body>
    <h1>掲示板を作成する</h1>
    <form action="{{route('board.create')}}" method="post">
        @csrf
        <label>タイトル:</label><input type="text" name="title"><br>
        <label>作成日:</label><input type="text" name="createdate"><br>
        <label>投稿者名:</label><input type="text" name="createuser"><br>
        <button type="submit">投稿する</button>
    </form>

    @foreach($datas as $data)
    <p>{{$data->title}}</p>
    <p>{{$data->createdate}}</p>
    <p>{{$data->createuser}}</p>
    @endforeach
</body>
</html>