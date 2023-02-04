<?php
declare(strict_types=1);

namespace App\UseCases;

use Carbon\CarbonImmutable;

final class ExportOrdersUsecase {

    public function run(CarbonImmutable $targetDate) {
        return $targetDate->toDateString()."の購入情報";
    }

}