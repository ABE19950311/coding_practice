@component('mail::message')
#新しいユーザが追加されました
{{$toUser->name}}さんこんにちは。
新しく{{$newUser->name}}さんが参加しました
@endcomponent