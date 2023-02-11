<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use App\Http\Requests\TodoRequest;

class TodoController extends Controller
{
    public function create(Request $request) {
        $todo = new Todo;
        $todo->user_id=$request->user()->id;
        $todo->todo=$request->input("todo");
        $todo->startdate=$request->input("start");
        $todo->enddate=$request->input("end");
        $todo->save();
        return redirect()->route("index");
    }
}
