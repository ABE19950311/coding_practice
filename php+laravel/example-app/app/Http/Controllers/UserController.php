<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller {

    public function register(Request $request) {
        $inputs = $request->all();

        $rules = [
            "name" => "required",
            "age" => "integer",
        ];

        $validator = Validator::make($inputs,$rules);

        if($validator->fails()) {
            //エラーの場合
        }else {
            //正常の場合
        }
    }
}