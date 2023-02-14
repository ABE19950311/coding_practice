<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Board;

class CommentController extends Controller
{
    public function comment(Request $request) {
        $board = new Board;
        $boardid = $request->route("boardId");
        $data = $board::where("id",$boardid)->firstOrFail();
        return view("src.comment")
                ->with("boards",$data);
    }

    public function create(Request $request) {
        $data = $request->only("comment");
        $userid = $request->user()->id;
        $comment = ["comment"=>$data["comment"]];
        $board = Board::find($request->route("boardId"));
        $board->users()->attach($userid,$comment);
        return redirect()->route("comment",["boardId"=>$request->route("boardId")])
                ->with("feed","投稿しました");
    }
}
