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
<form action="{{route('todo.create')}}" method="post">
    @csrf
    <label>TODO:</label><input type="text" name="todo">
    <label>開始日:</label><input type="text" name="start">
    <label>終了日:</label><input type="text" name="end">
    <br>
    <button type="submit">作成</button>
</form>
</x-app-layout>

</body>
</html>