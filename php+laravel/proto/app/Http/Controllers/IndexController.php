<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class IndexController extends Controller
{
    public function index() {
        $data = Todo::all();
        return view("src.index")
                ->with("todos",$data);
    }
}
