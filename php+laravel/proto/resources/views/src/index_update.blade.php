<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>編集</h1>
    @if(session("feedback"))
    <p>{{session("feedback")}}</p>
    @endif
    <a href="{{route('index')}}">戻る</a>
    <form action="{{route('todo.update',['todoId'=>$todo->id])}}" method="post">
        @method("PUT")
        @csrf
        <input type="text" name="todo" placeholder="{{$todo->todo}}">
        <button type="submit">編集する</button>
    </form>
</body>
</html>