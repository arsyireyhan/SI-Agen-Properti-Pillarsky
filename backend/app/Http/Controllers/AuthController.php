<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\user;
use App\Models\admin;
use App\Models\account;


class AuthController extends Controller
{
        public function login(Request $request){
            $credentials = $request->only(['username','password']);

            if(Auth::attempt($credentials)) {
                $user = Auth::user();
                $token = $user->createToken('MyApp')->accessToken;
                return response()->json([
                    'user' => $user,
                    'token' => $token,
                    'id_account' => (int)$user->id_account,
                ]);
            }

            return response()->json(['error' => true, 'message' => "Unauthenticated"],401);
        }

    public function loginMobile (Request $request){
        $credentials = $request->only(['username','password']);
        $user = user::where('username', $request->username)->first();
        if($user && hash::check($request->password, $user->password)){
            $user->save();
            $data = [
                'error' => false,
                'message' => "Login Berhasil",
                'id' => $user->id,
                'id_account' => $user->id_account,
                'id_admin' => $user->id_admin,
                // 'token' => $token,
                'username' => $user->username,
            ];
            return response()->json($data);
        } else {
            $data = [
                'error'    => true,
                'message'  => 'Login Gagal',
            ];
            return response()->json($data);
        }
    }
    
    //add other method (pass reset, logout, dll)
    public function logout(Request $request){
        $request->user()->token()->revoke();
        $request->user()->token()->delete();
        return response()->json(['message' => 'berhasil logout'], 200);
    }

    public function loginUser(Request $request){
        $user = account::where('username', $request->username)->first();
        $password = account::where('password', $request->password)->first();
        if(!$user || !$password){  
            return["error"=>"Username/Password anda tidak cocok"];
        }
        return $user;


        // if (auth()->attempt(['username' => $request->input('username'), 'password' => $request->input('password')])) {
        //     $user = auth()->user();
            
        //     // Create a Sanctum token for the user
        //     $token = $user->createToken('MyApp')->plaintexttoken;
    
        //     return response()->json(['token' => $token]);
        // } else {
        //     return response()->json(['error' => 'Username/Password anda tidak cocok'], 401);
        // }
    }
}
