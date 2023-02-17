<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('image_todo', function (Blueprint $table) {
            $table->id();
            $table->foreignId("image_id")->constrained("images")
            ->cascadeOnDelete();
            $table->foreignId("todo_id")->constrained("todos")
            ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('image_todo');
    }
};
