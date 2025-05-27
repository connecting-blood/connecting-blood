<?php

use App\Http\Controllers\ProfileController;
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
// Route::get('/', function () {
//     return response()->json(['env' => config('app.env')]);
// });
Route::middleware((config('app.env') == 'production') ? [] : ['auth', 'verified'])->group(function () {
    Route::inertia('/', 'LandingPage/LandingPage')->name('root');
    Route::inertia('/home', 'Home/Home')->name('home');
    Route::inertia('/about-us', 'AboutUs/AboutUs')->name('AboutUs');
    Route::inertia('/how-it-works', 'HowItWorks/HowItWorks')->name('howItWorks');
    Route::get('/donor', function () {
        return redirect()->route('root');
    })->name('donor');

    Route::get('/seeker', function () {
        return redirect()->route('root');
    })->name('seeker');
    // Route::inertia('/donor', 'Donor/Donor')->name('donor');
    // Route::inertia('/seeker', 'Home/Home')->name('seeker');
    Route::inertia('/contact-us', 'ContactUs/ContactUs')->name('contactUs');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/dashboard', 'Dashboard')->name('dashboard');
    Route::inertia('/users', 'Users/Users')->name('users');
    Route::inertia('/users/approved', 'Users/Users')->name('users.approved');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
