<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
    // return Inertia::render('Home/Home', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
    // return Inertia::render('Blood/RequestBlood', [
    //     'canLogin' => Route::has('login'),
    //     'canRegister' => Route::has('register'),
    //     'laravelVersion' => Application::VERSION,
    //     'phpVersion' => PHP_VERSION,
    // ]);
// })->name('home');


Route::inertia('/', 'Home/Home')->name('home');
Route::inertia('/about-us', 'AboutUs/AboutUs')->name('AboutUs');
Route::inertia('/how-it-works', 'HowItWorks/HowItWorks')->name('howItWorks');
Route::inertia('/donor', 'Home/Home')->name('donor');
Route::inertia('/seeker', 'Home/Home')->name('seeker');
Route::inertia('/contact-us', 'Home/Home')->name('contactUs');
Route::inertia('/dashboard/users/all', 'Users/Users')->name('users.all');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
