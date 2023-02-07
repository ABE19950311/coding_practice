<?php

namespace App\Http\Controllers\Tweet;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tweet;

class DeleteControler extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $tweetid = (int) $request->route("tweetId");
        $tweet = Tweet::where("id",$tweetid)->firstOrFail();
        $tweet->delete();
        return redirect()
            ->route("tweet.index")
            ->with("feedback.success","削除");
    }
}
