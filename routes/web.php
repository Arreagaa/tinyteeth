<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing/TShow');
})->name('landing');

Route::get('/patient', function () {
    return Inertia::render('PatientInfo/TShow');
})->name('patient');

Route::get('/contact-form', function () {
    return Inertia::render('Contact/TShow');
})->name('contact-form');

Route::get('/staff', function () {
    return Inertia::render('Staff/TShow');
})->name('staff');

Route::post('/contact', ContactController::class)->name('contact');