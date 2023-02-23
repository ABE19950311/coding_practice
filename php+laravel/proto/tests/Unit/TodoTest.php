<?php

namespace Tests\Unit;

// use PHPUnit\Framework\TestCase;
use Tests\TestCase;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;

class TodoTest extends TestCase
{
    use RefreshDatabase;
    /**
     * @runInSeparateProcess
     * @return void
     */
    public function test_check_todo()
    {
        $this->artisan("db:seed",["--class"=>"TodoSeeder"]);
        $todo = new TodoController;
        $response = $todo->fetch();
        $this->withoutExceptionHandling();
        $response->assertEquals($response,3);
    }
}
