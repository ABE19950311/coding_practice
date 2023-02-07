<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>つぶやきアプリ</title>
</head>
<body>
    <div>
    <p>投稿フォーム</p>
    <form action="{{route('tweet.create')}}" method="post">
        @csrf
        <label>つぶやき</label>
        <span>140じまで</span>
        <textarea name="tweet" id="tweet-content" cols="30" rows="10" placeholder="つぶやき入力"></textarea>
        @error("tweet")
        <p style="color:red;">{{$message}}</p>
        @enderror
        <button type="submit">投稿</button>
    </form>
    </div>
    <div>
        @foreach($tweets as $tweet)
        <details>
            <summary>{{$tweet->content}}</summary>
            <div>
                <a href="{{route('tweet.update.index',['tweetId'=>$tweet->id])}}">編集</a>
                <form action="{{route('tweet.delete',['tweetId'=>$tweet->id])}}" method="post">
                    @method("DELETE")
                    @csrf
                    <button type="submit">削除</button>
                </form>
            </div>
        </details>
        @endforeach
    </div>
</body>
</html>