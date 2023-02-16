@component("mail:message")
#昨日は{{$count}}件つぶやかれました
{{$toUser->name}}さんこんにちは！！！
昨日は{{$count}}件ついかされました
@component("mail::button",["url"=>route('tweet.index')])
つぶやきを見に行く
@endcomponent
@endcomponent