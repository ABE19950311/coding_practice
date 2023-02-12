<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use App\Http\Requests\DeleteRequest;

class DeleteController extends Controller
{
    public function delete(DeleteRequest $deleteRequest) {
        $delid = $deleteRequest->todoid();
        $todo = Todo::where("id",$delid)->firstOrFail();
        $todo->delete();
        return redirect()
            ->route("index")
            ->with("feedback","削除");
    }
}
