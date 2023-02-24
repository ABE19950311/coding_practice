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
    public function test_check_index()
    {
        $res = $this->get("/");
        $res->assertStatus(200);
        $res->assertSee("Documentation");
    }

}
