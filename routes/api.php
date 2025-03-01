<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BloodStockController;
use App\Http\Controllers\BloodStorageUnitController;
use App\Http\Controllers\BloodTypesController;
use App\Http\Controllers\DistrictsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| This file defines all API routes for the application, including public
| and protected routes. Authentication is handled using Laravel Sanctum.
|
*/

// Public API Routes
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'newUser']);

Route::apiResource('districts', DistrictsController::class)->only(['index', 'show']);
Route::get('blood-types', [BloodTypesController::class, 'index']);
Route::get('blood-types/types', [BloodTypesController::class, 'show']);
Route::get('blood-storage-units', [BloodStorageUnitController::class, 'index']);
Route::get('blood-stocks', [BloodStockController::class, 'index']);

// Protected API Routes (Requires Authentication)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('users', [AuthController::class, 'index'])->name('api.users');
    Route::get('profile', [AuthController::class, 'user'])->name('api.user.check');
    Route::patch('profile', [AuthController::class, 'update']);

    Route::apiResource('blood-storage-units', BloodStorageUnitController::class)->except(['index']);
    Route::apiResource('blood-stocks', BloodStockController::class)->except(['index']);
});