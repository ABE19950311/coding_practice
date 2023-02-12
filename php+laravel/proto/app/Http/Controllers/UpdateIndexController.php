<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use App\Http\Requests\UpdateRequest;

class UpdateIndexController extends Controller
{
    public function index(UpdateRequest $updateRequest) {
        $todoid = $updateRequest->todoid();
        $data = Todo::where("id",$todoid)->firstOrFail();
        return view("src.index_update")
            ->with("todo",$data);
    }
}
