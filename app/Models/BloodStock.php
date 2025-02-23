<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodStock extends Model
{
    /** @use HasFactory<\Database\Factories\BloodStockFactory> */
    use HasFactory;
    protected $fillable = [
        'bbu_id',
        'blood_type',
        'units',
        'expire_at'
    ];
}
