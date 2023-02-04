<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\UseCases\ExportOrdersUsecase;
use Carbon\CarbonImmutable;

class ExportOrdersCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:export-orders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '購入情報を出力する';

    private $useCase;

    public function __construct(ExportOrdersUsecase $useCase)
    {
        parent::__construct();
        $this->useCase=$useCase;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle():int {
        $tsv = $this->useCase->run(CarbonImmutable::today());
        echo $tsv,PHP_EOL;
        return 0;
    }
}
