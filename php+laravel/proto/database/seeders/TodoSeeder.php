<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Todo;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Todo::create([
            "user_id"=>"1",
            "todo"=>"test1"
        ]);
        Todo::create([
            "user_id"=>"1",
            "todo"=>"test2"
        ]);
        Todo::create([
            "user_id"=>"1",
            "todo"=>"test3"
        ]);
    }
}
