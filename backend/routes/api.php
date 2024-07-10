<?php

use App\Http\Controllers\accountController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\bundleController;
use App\Http\Controllers\favoriteController;
use App\Http\Controllers\propertyController;
use App\Http\Controllers\TransaksiController;
use App\Http\Controllers\userController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// route after login
route::middleware("auth:api")->group(function() {
// UNTUK ROUTE SETELAH LOGIN (ROUTE FIX)
 
    // ROUTE LOGOUT
    Route::post('logout', [AuthController::class, 'logout'])->name('api.logout');

    // ROUTE ACCOUNT
    Route::resource('/account', accountController::class)->only(['index','update','show','index'])->middleware('can:Account_only');

    //ROUTE PROPERTY
    Route::resource('/property', propertyController::class)->only(['index','update','store','destroy']);
    Route::post('/delete-properti', [propertyController::class, 'destroy']);
    Route::post('/storePropertiMobile', [propertyController::class, 'storePropertiMobile'])->middleware('can:Account_only');

    // ROUTE FAVORITE
    Route::resource('/favorite', favoriteController::class)->only(['index','show','store'])->middleware('can:Account_only');
    Route::post('/deletefavorite', [favoriteController::class, 'destroy'])->middleware('can:Account_only');

    // ROUTE CHECKOUT (TRANSAKSI IKLAN)
    Route::resource('/transaksi_iklan', TransaksiController::class)->only(['show','index','update']);
    Route::post('/transaksi_iklan/{id}', [TransaksiController::class, 'uploadPembayaran']);
    Route::get('/cekPembayaran/{id}', [TransaksiController::class, 'showBuktiPembayaran']);
    Route::post('/editStatusPembayaranLunas/{id}', [TransaksiController::class, 'editStatusPembayaranLunas']);
    Route::post('/editStatusPembayaranPending/{id}', [TransaksiController::class, 'editStatusPembayaranPending']);
    Route::post('/sendMessageTransaksi/{id}', [TransaksiController::class, 'sendMessageTransaksi']);
    Route::post('/editMessageTransaksi', [TransaksiController::class, 'editMessageTransaksi']);

    // ROUTE ADMIN
    Route::resource('/admin', adminController::class)->only(['index', 'update', 'store', 'show'])->middleware('can:Admin_only');

    // ROUTE USER   
    Route::resource('/userr', userController::class)->only(['index','show']);

});
    //Register Account
    Route::post('/storeAccount', [accountController::class, 'storeAccount']);

    //Register Admin
    Route::post('/storeAdmin', [adminController::class, 'store']);

    //Route Guest (No Credential)
    Route::get('/index-lunas', [propertyController::class, 'indexLunas']);
    Route::get('/property/{id}', [propertyController::class, 'show']);

    Route::get('/storePropertiMobile', [propertyController::class, 'store']);

    //Login
    Route::post('login', [AuthController::class, 'login']);
    

    Route::post('cekLogin', [AuthController::class, 'cekLogin']);
    Route::Post('loginUser', [AuthController::class, 'loginUser']);
    Route::Post('loginMobile', [AuthController::class, 'loginMobile']);

// route tabel account
// Route::post('users', [userController::class, 'store'])->name('api.userStore');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:api')->get('/user',function (Request $request) {
    $cekuser = $request->user();

    if($cekuser->id_account === null && $cekuser->id_admin !== null)
    {
        $admin = DB::table('users')
                    ->join('admins', 'users.id_admin', '=', 'admins.id_admin')
                    ->select( 'admins.admins_name as name', 'admins.id_admin as id')
                    ->where('admins.id_admin', $cekuser->id_admin)
                    ->first();
        $admin->role = 'admins';
        return response()->json(['userloggedin' => $admin]);
    } 
    
    else if($cekuser->id_account !== null && $cekuser->id_admin === null){
        $account = DB::table('users')
                    ->join('accounts', 'users.id_account', '=', 'accounts.id_account')
                    ->select('accounts.mahasiswa_name as name','accounts.id_account as id','accounts.status_mahasiswa as stats')
                    ->where('accounts.id_account','=', $cekuser->id_account)
                    ->first();

        $account->role = 'accounts';
        return response()->json(['userloggedin' => $account]);
    } else {
        return response()->json(['message' => 'Unauthorized' ]);
    }
});


// Route::middleware('auth:sanctum')->group(function(){
//     //protected api routes
// });

