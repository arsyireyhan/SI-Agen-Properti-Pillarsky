<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/register', function () {
    return view('register');
});

route::resource('admin', 'App\Http\Controllers\adminController');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();
Route::get('admin/home', [HomeController::class, 'adminHome'])->name('admin.home')->middleware('is_admin'); //route admin
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home'); //route user

Route::get('/admin/login', [LoginController::class, 'showAdminLoginForm']);
Route::post('/admin/login', [LoginController::class, 'adminLogin']);

Route::get('/api/login', [LoginController::class, 'showApiUserLoginForm']);
Route::post('/api/login', [LoginController::class, 'apiUserLogin']);
