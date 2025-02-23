<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodTypes extends Model
{
    /** @use HasFactory<\Database\Factories\BloodTypesFactory> */
    use HasFactory;
    protected $hidden = [
        'created_at',
        'updated_at'
    ];
}
