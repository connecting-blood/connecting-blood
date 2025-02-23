<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BloodBankController;
use App\Http\Controllers\BloodStorageUnitController;
use App\Http\Controllers\BloodTypesController;
use App\Http\Controllers\DistrictsController;
use Illuminate\Support\Facades\Route;

// Public API

Route::post('login', [AuthController::class, 'login']);
Route::post('new-user', [AuthController::class, 'newUser']);
// Route::post('districts', [DistrictsController::class, 'index']);
// Route::post('districts/{districtName}', [DistrictsController::class, 'state']);
Route::get('bloods', [BloodTypesController::class, 'index']);
Route::get('blood-storage-unit', [BloodStorageUnitController::class, 'index']);
Route::get('blood-bank', [BloodBankController::class, 'index']);
Route::resource('districts', DistrictsController::class);


// protected API
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::resource('blood-storage-unit', BloodStorageUnitController::class)->except('index');
    Route::resource('blood-bank', BloodBankController::class)->except('index');
    Route::get('profile', [AuthController::class, 'user']);
    Route::patch('profile', [AuthController::class, 'update']);
});