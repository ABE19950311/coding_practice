<?php

namespace App\Http\Controllers\Tweet\Update;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\Tweet\UpdateRequest;
use App\Models\Tweet;
use Illuminate\Foundation\Console\UpCommand;
use App\Services\TweetService;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class PutController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(UpdateRequest $request,TweetService $tweetService)
    {
        if(!$tweetService->checkOwnTweet($request->user()->id,$request->id())) {
            throw new AccessDeniedHttpException();
        }
        $tweet = Tweet::where("id",$request->id())->firstOrFail();
        $tweet->content=$request->tweet();
        $tweet->save();
        return redirect()
            ->route("tweet.update.index",["tweetId"=>$tweet->id])
            ->with("feedback.success","編集すみ");
    }
}
