<?php

namespace App\Http\Controllers\Tweet;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tweet;
use App\Services\TweetService;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class DeleteControler extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request,TweetService $tweetService)
    {
        $tweetid = (int) $request->route("tweetId");
        if(!$tweetService->checkOwnTweet($request->user()->id,$tweetid)) {
            throw new AccessDeniedHttpException();
        }
        $tweet = Tweet::where("id",$tweetid)->firstOrFail();
        $tweet->delete();
        return redirect()
            ->route("tweet.index")
            ->with("feedback.success","削除");
    }
}
