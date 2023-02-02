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
            // $jsonres=Response::json(["status"=>"success"]);
            // return $jsonres;
            //$authors = \App\Models\Author::all();
            //$find = \App\Models\Author::find(11);
            //$where = \App\Models\Author::whereName("近藤 裕太")->get();
            //$update = \App\Models\Author::find(1)->update(["name"=>"著者UPDATE"]);
            //$delete = \App\Models\Author::find(1);
            // /$delete->delete();
            //\App\Models\Author::destroy([1,2,3,4,5]);

            // \App\Models\Author::create([
            //     "name"=>"著者A",
            //     "kana"=>"チョシャA"
            // ]);

            // $filter = $authors->filter(
            //     function($author) {
            //         return $author->id > 5;
            //     }
            // );
            // $authors = \App\Models\Author::where("id",">=",2)
            // ->orderBy("id")
            // ->get();

            // $author = \App\Models\Author::firstOrCreate(["name"=>"著者C","kana"=>"チョシャC"]);

            // foreach($authors as $author) {
            //     echo $author->name;
            // }

            $results = \Illuminate\Support\Facades\DB::table("books")
            ->select(["bookdetails.isbn","books.name as title","authors.name as author",
                        "bookdetails.price"])
            ->leftJoin("bookdetails","books.id","=","book.details.book_id")
            ->leftJoin("authors","books.author_id","=","authors.id")
            ->where("bookdetails.publicshed_date","desc")
            ->orderBy("bookdetails.published_date","desc")
            ->get();

            //echo $authors->toJson();
            //echo $authors->count();
            //echo $find->name;

            //if($where) {
            //    echo $where;
            //}else {
            //    echo "nodata";
            //}
        }

        // public function __testres(Request $request):JsonResponse {
        //     $response = Response::json(["status"=>"success"]);
        //     $response = response()->json(["status"=>"success"]);
        //     return $response;
        // }

}