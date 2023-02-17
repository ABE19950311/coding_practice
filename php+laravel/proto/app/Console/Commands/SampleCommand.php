<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Mail\Mailer;
use App\Mail\TestMail;
use App\Models\User;

class SampleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sample-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Smaple command';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(Mailer $mailer)
    {
            $mailer->to("test@example.com")
            ->send(new TestMail());
        return 0;
    }
}
