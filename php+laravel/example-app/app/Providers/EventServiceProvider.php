<?php

namespace App\Providers;

use App\CustomNamespace\PublishProcessor;
use App\Listeners\MessageSubscriber;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{

    protected $listen = [
        PublishProcessor::class => [
            Listeners\MessageSubscriber::class,
            Listeners\MessageQueueSubscriber::class,
        ],
    ];


    public function boot()
    {
        //
    }


    public function shouldDiscoverEvents()
    {
        return false;
    }
}
