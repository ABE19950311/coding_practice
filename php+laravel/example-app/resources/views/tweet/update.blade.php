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
    @if (session("feedback.success"))
        <p>{{session("feedback.success")}}</p>
    @endif
    <div>
    <a href="{{route('tweet.index')}}">戻る</a>
    <form action="{{route('tweet.update.put',['tweetId'=>$tweet->id])}}" method="post">
        @method("PUT")
        @csrf
        <label>つぶやき</label>
        <span>140制限</span>
        <textarea name="tweet" id="tweet-content" cols="30" rows="10">{{$tweet->content}}</textarea>
        @error("tweet")
        <p>{{$message}}</p>
        @enderror
        <button type="submit">編集</button>
    </form>
    </div>
</body>
</html>