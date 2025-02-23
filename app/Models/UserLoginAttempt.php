<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserLoginAttempt extends Model
{
    /** @use HasFactory<\Database\Factories\UserLoginAttemptFactory> */
    use HasFactory;
    protected $fillable = [
        'user_id'
    ];
}
