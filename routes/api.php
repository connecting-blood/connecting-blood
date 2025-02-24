<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BloodBankController;
use App\Http\Controllers\BloodStockController;
use App\Http\Controllers\BloodStorageUnitController;
use App\Http\Controllers\BloodTypesController;
use App\Http\Controllers\DistrictsController;
use Illuminate\Support\Facades\Route;

// Public API
Route::post('login', [AuthController::class, 'login'])->name('api.login');
Route::post('new-user', [AuthController::class, 'newUser']);
Route::resource('districts', DistrictsController::class);
Route::get('bloods', [BloodTypesController::class, 'index']);
Route::get('blood-storage-unit', [BloodStorageUnitController::class, 'index']);
Route::get('blood-stocks', [BloodStockController::class, 'index']);

// protected API
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::resource('blood-storage-unit', BloodStorageUnitController::class)->except('index');
    Route::resource('blood-stocks', BloodStockController::class)->except('index');
    Route::get('profile', [AuthController::class, 'user']);
    Route::patch('profile', [AuthController::class, 'update']);
});