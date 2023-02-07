<?php

namespace App\Http\Controllers\Tweet\Update;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tweet;

class IndexController extends Controller
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
        return view("tweet.update")->with("tweet",$tweet);
    }
}
