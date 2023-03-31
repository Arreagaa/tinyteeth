<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing/TShow');
})->name('landing');

Route::get('/Patient', function () {
    return Inertia::render('PatientInfo/TShow');
})->name('patient');

Route::get('/Contact-Form', function () {
    return Inertia::render('Contact/TShow');
})->name('contact');

Route::post('/contact', ContactController::class)->name('contact');