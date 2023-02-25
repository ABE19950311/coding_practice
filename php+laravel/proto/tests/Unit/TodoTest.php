<?php

namespace Tests\Unit;

// use PHPUnit\Framework\TestCase;
use Tests\TestCase;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

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

    public function test_check_board()
    {
        $user = User::factory()->create();
        $this->actingAs($user);
        $res = $this->get("/board");
        $res->assertStatus(200);
    }

}
