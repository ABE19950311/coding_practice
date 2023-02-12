<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use App\Http\Requests\UpdateRequest;

class UpdateController extends Controller
{
    public function update(UpdateRequest $updateRequest) {
        $todoid = $updateRequest->todoid();
        $todo = Todo::where("id",$todoid)->firstOrFail();
        $todo->todo=$updateRequest->todo();
        $todo->save();
        return redirect()
                ->route("todo.update.index",["todoId"=>$todoid])
                ->with("feedback","編集済み");
    }
}
