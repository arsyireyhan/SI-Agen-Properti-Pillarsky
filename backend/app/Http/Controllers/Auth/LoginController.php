<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }


    public function showAdminLoginForm()
    {
        return view('auth.admin-login');
    }

    public function adminLogin(Request $request) //admin login
    {
        $this->validate($request, [
            'username' => 'required|username',
            'password' => 'required|min:6',
        ]);

        if (Auth::guard('admins')->attempt($request->only('username', 'password'))) {
            return redirect('/admin/dashboard');
        }

        return back()->withErrors([
            'username' => 'Invalid credentials.',
        ]);
    }

    public function showApiUserLoginForm()
    {
        return view('auth.api-user-login');
    }

    public function apiUserLogin(Request $request)
    {
        $this->validate($request, [
            'username' => 'required|username',
            'password' => 'required|min:6',
        ]);

        if (Auth::guard('users')->attempt($request->only('username', 'password'))) {
            return redirect('/api/dashboard');
        }

        return back()->withErrors([
            'username' => 'Invalid credentials.',
        ]);
    }

    

    public function login(Request $request)
    {   
        $input = $request->all();
   
        $this->validate($request, [
            'username' => 'required',
            'password' => 'required',
        ]);
   
        if(auth()->attempt(array('username' => $input['username'], 'password' => $input['password'])))
        {
            if (auth()->user()->is_admin == 1) {
                return redirect()->route('admin.home');
            }else{
                return redirect()->route('home');
            }
        }else{
            return redirect()->route('login')
                ->with('error','username And password salah.');
        }
    }
}
