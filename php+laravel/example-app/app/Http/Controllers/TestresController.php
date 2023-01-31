<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response as IlluminateResponse;
use Illuminate\Support\Facades\Response;

class TestresController extends Controller {

    // public function __testres(Request $request): IlluminateResponse {
    //     $response = Response::make("hello");
    //     $response = response("hello");
    //     $response = response(
    //         "hello",
    //         IlluminateResponse::HTTP_OK,
    //         [
    //             "content-type"=>"text/plain"
    //         ]
    //         );
    //         return $response;
    // }
        public function testreq() {
            // $res=Response::make("テストレスポンス作成");
            // return $res;
            //return view("testres.testres");
            $jsonres=Response::json(["status"=>"success"]);
            return $jsonres;
        }

        public function __testres(Request $request):JsonResponse {
            $response = Response::json(["status"=>"success"]);
            $response = response()->json(["status"=>"success"]);
            return $response;
        }

}