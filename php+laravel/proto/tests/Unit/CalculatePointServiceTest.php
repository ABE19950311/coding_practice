<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Service\CalculatePointService;

class CalculatePointServiceTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_calcPoint_購入金額が0ならポイント0()
    {
        $result = CalculatePointService::calcPoint(0);
        $this->assertSame(0,$result);
    }

    public function test_calcPoint_購入金額が1000ならポイント10()
    {
        $result = CalculatePointService::calcPoint(1000);
        $this->assertSame(10,$result);
    }
}
