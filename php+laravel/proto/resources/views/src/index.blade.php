<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>テストアプリ</title>
</head>
<body>

<x-app-layout>
<h1>ハローワールド！！</h1>
<a href="{{route('board')}}">掲示板へ</a>
<form action="{{route('todo.create')}}" method="post">
    @csrf
    <label>TODO:</label><input type="text" name="todo">
    <label>開始日:</label><input type="text" name="start">
    <label>終了日:</label><input type="text" name="end">
    <br>
    @if(session("err"))
    <p>{{session("err")}}</p>
    @endif
    <button type="submit">作成</button>
</form>

    <div>
        @foreach($todos as $todo)
        <details>
        <summary>{{$todo->todo}}</summary>
        {{$todo->startdate}}
        {{$todo->enddate}}
        作成者:{{$todo->user->name}}
        <a href="{{route('todo.update.index',['todoId'=>$todo->id])}}">編集</a>
        <form action="{{route('todo.delete',['todoId'=>$todo->id])}}" method="post">
        @method("DELETE")
        @csrf
        <button type="submit">削除</button>
        </form>
        </details>
        @endforeach
    </div>
</x-app-layout>

</body>
</html>