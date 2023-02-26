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
        $this->assertSame("hoge","hoge");
        $this->assertSame(0,0);
        $this->assertSame(true,true);
        $this->assertCount(2,[1,2]);
        $arr1=[0=>"foo",1=>"bar"];
        $arr2=[0=>"foo",1=>"bar"];
        $arr3=[0=>"hoge",1=>"bar"];
        $this->assertSame($arr1,$arr2);
        $this->assertNotEquals($arr1,$arr3);
    }

}
