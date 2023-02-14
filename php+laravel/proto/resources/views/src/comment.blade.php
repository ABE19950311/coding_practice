<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>掲示板コメント</title>
</head>
<body>
    <a href="{{route('index')}}">戻る</a>
    <h1>コメントする</h1>
    <h1>掲示板タイトル:{{$boards->title}}</h1>

    @if(session("feed"))
    <p>{{session("feed")}}</p>
    @endif
    <form action="{{route('comment.create',['boardId'=>$boards->id])}}" method="post">
        @csrf
        <textarea name="comment" cols="30" rows="10"></textarea>
        <button type="submit">コメントする</button>
    </form>

    @foreach($boards->users as $comment)
    <span>{{$comment->pivot->comment}}</span>
    @endforeach
</body>
</html>