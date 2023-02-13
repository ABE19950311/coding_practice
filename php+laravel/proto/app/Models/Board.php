<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    use HasFactory;

    protected $fillable=["user_id","title","createdate","createuser"];
    public function users() {
        return $this->belongsToMany(User::class);
    }
}
