<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class HelloCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'hello:class{name}{--switch}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'サンプルコマンド（クラス）';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle():int
    {
        $switch = $this->option("switch");
        $name = $this->argument("name");
        $this->comment("Hello".$name.($switch ? "ON":"OFF"));
        return 0;
    }
}
