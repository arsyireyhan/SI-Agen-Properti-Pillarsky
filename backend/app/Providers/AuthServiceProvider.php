<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\EloquentUserProvider;
use App\Models\User;
use App\Models\Admin;
use Laravel\Passport\Passport;


class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        //

        $this->registerPolicies();

        Passport::routes();

        Gate::define('Account_only', function (user $user){
            return $user->id_admin === null && $user->id_account != null;
        });

        Gate::define('Admin_only', function (user $user){
            return $user->id_admin != null && $user->id_account === null;
        });

        // Auth::provider('user', function ($app, array $config){
        //     return new EloquentUserProvider($app['hash'], User::class);
        // });

        // Auth::provider('admin', function ($app, array $config){
        //     return new EloquentUserProvider($app['hash'], Admin::class);
        // });

        // Auth::viaRequest('api', function ($request){
        //     $selectRole = $request->input('select_role');
        //     if ($selectRole === 'users' ){
        //         return Auth::guard('users')->user();
        //     } else {
        //         return Auth::guard('admins')->user();
        //     }
        // });
        //
    }
}
