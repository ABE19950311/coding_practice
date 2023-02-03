<?php

namespace App\Listeners;

use App\Events\PublishProcessor;
use Illuminate\Console\Concerns\InteractsWithIO;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class MessageQueueSubscriber implements ShouldQueue
{
    use InteractsWithQueue;

    public function handle(PublishProcessor $event)
    {
        \Log::info($event->getInt());
    }
}
