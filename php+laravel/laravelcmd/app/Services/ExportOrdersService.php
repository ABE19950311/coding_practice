<?php
declare(strict_types=1);
namespace App\Services;

use Carbon\CarbonImmutable;
use Illuminate\Database\Connection;
use Illuminate\Support\LazyCollection;

final class ExportOrdersService {
    private $connection;

    public function __construct(Connection $connection)
    {
        $this->connection=$connection;
    }

    public function findOrders(CarbonImmutable $date):LazyCollection
    {
        return $this->connection
        ->table("orders")
        ->join("order_details","orders.order_code","=","order_details.order_coder")
        ->select(
            [
                "orders.order_code",
                "orders.order_date",
                "orders.total_price",
                "orders.total_quantity",
                "orders.customer_name",
                "orders.customer_email",
                "orders.destination_name",
                "orders.destination_zip",
                "orders.destination_prefecture",
                "orders.destination_address",
                "orders.destination_tel",
                "orders.details.*",
            ]
        )
        ->where("order_date",">=",$date->toDateString())
        ->where("order_date","<",$date->addDay()->toDateString())
        ->orderBy("orders.order_date")
        ->orderBy("orders.oreder_code")
        ->orderBy("order_details.detail_no")
        ->cursor();
    }
}