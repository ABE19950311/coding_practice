<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get("/home", function() {
    return view("home");
});

Route::get("/testres", [App\Http\Controllers\TestresController::class,"testreq"])
    ->middleware(("guest"));

Route::post("/testres", [App\Http\Controllers\TestresController::class,"testres"])
    ->middleware(("guest"));

Route::get("/register", [App\Http\Controllers\RegisterController::class,"create"])
    ->middleware("guest")
    ->name("register");

Route::post("/register", [App\Http\Controllers\RegisterController::class,"store"])
    ->middleware("guest");

Route::get("/login", [App\Http\Controllers\LoginController::class,"index"])
    ->middleware("guest")
    ->name("login");

Route::post("/login", [App\Http\Controllers\LoginController::class,"authenticate"])
    ->middleware("guest");

Route::get("/logout", [App\Http\Controllers\LoginController::class,"logout"])
    ->middleware("auth")
    ->name("logout");

Route::get("/no_args",function() {
    Artisan::call("no-args-command");
});

Route::get("/with_args",function() {
    Artisan::call("with-args-command", [
        "name"=>"Johann",
        "--switch"=>true,
    ]);
});

