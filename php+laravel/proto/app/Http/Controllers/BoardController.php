<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Board;
use App\Http\Requests\BoardRequest;
use Symfony\Component\VarDumper\Caster\RedisCaster;

class BoardController extends Controller
{
    public function board() {
        $board=new Board;
        $data = $board::all();
        return view("src.board")
                ->with("datas",$data);
    }

    public function create(Request $request) {
        $board= new Board;
        $input = $request->only("title","createdate","createuser");
        $userid = $request->user()->id;
        $board::create([
            "user_id"=>$userid,
            "title"=>$input["title"],
            "createdate"=>$input["createdate"],
            "createuser"=>$input["createuser"]
        ]);
        return redirect()->route("board");
    }
}