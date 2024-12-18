<?php
declare(strict_types=1);
namespace App\Service;
use App\Exceptions\PreconditionException;

final class CalculatePointService {
    public static function calcPoint(int $amount):int {
        if($amount<0) {
            throw new PreconditionException("購入金額が負の数");
        }

        if($amount<1000) {
            return 0;
        }

        if($amount<10000) {
            $basePoint=1;
        }else {
            $basePoint=2;
        }

        return intval($amount/100)*$basePoint;
    }
}