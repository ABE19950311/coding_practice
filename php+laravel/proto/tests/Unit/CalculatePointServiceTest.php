<?php

namespace Tests\Unit;

use App\Exceptions\PreconditionException;
use PHPUnit\Framework\TestCase;
use App\Service\CalculatePointService;

class CalculatePointServiceTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */

    public function dataProvider_for_calcPoint() {
        return [
            "購入金額０なら０"=>[0,0],
            "購入金額９９９なら０"=>[0,999],
            "購入金額１０００なら１０"=>[10,1000]
        ];
    }

    /**
     * @dataProvider dataProvider_for_calcPoint
     */

    public function test_calcPoint(int $a,int $b)
    {
        $result = CalculatePointService::calcPoint($b);
        $this->assertSame($a,$result);
    }

    public function test_calcPoint_負の数なら例外をスロー() {
        $this->expectException(PreconditionException::class);
        $this->expectExceptionMessage("購入金額が負の数");
        CalculatePointService::calcPoint(-1);
    }

}
