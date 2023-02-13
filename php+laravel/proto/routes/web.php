<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

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

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get("/index",[App\Http\Controllers\IndexController::class,"index"])
    ->name("index");

Route::post("/todo/create",[App\Http\Controllers\TodoController::class,"create"])
    ->name("todo.create");

Route::put("/todo/update/{todoId}",[App\Http\Controllers\UpdateController::class,"update"])
    ->name("todo.update");

Route::get("/todo/update/index/{todoId}",[App\Http\Controllers\UpdateIndexController::class,"index"])
    ->name("todo.update.index");

Route::delete("/todo/delete/{todoId}",[App\Http\Controllers\DeleteController::class,"delete"])
    ->name("todo.delete");

Route::get("/board",[App\Http\Controllers\BoardController::class,"board"])
    ->name("board");

Route::post("/board/create",[App\Http\Controllers\BoardController::class,"create"])
    ->name("board.create");



require __DIR__.'/auth.php';
