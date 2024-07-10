<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\account;
use App\Models\admin;
use App\Models\user;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use exception;

class accountController extends Controller
{
     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeAccount (Request $request){
        $request->validate([
            "nama_lengkap" => ['required'],
            "email" => ['required'],
            "no_hp" => ['required'],
            "username" => ['required'],
            "password"=> ['required'],
        ]);

        $account = new account;
        $account->nama_lengkap = $request["nama_lengkap"];
        $account->email = $request["email"];
        $account->no_hp = $request["no_hp"];
        $account->username = $request["username"];
        $account->password = Hash::make($request["password"]);

        if ($account->save()){
            $user = new user();
            $user->id_account = $account->id_account;
            $user->id_admin = null;
            $user->username = $account->username;
            $user->password = $account->password;
           
            if($user->save()){
                return response()->json([
                    'success' => true,
                    'message' => 'Add Account Berhasil!',
                    'account' => $account,
                    'user' => $user,
                ], 200);

            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Add Account Gagal!',
                    'user' => $user,
                ], 400);
            }

        } else {
            return response()->json([
                'success' => false,
                'message' => 'Add Account Gagal!',
                'accounts' =>$account,
            ], 400);
        }
    }

    public function show (account $account){
        return response()->json([
            "success" => true,
            "message" => "data akun berhasil diambil",
            "accounts" => $account
        ], 200);
    }

    public function index (){
        $account = DB::table('accounts')->select('*')->get();
        if(count($account)>0){
            return response()->json([
                'success' => true,
                'message' => 'data account berhasil diambil!',
                'accounts' => $account
            ]);
        }
        return response()->json([
            'message' => 'data account kosong!',
            'accounts' => null
        ], 204);
    }

    public function update (Request $request, account $account){
        $request->validate([
            "nama_lengkap" => ['required'],
            "email" => ['required'],
            "no_hp" => ['required'],
            "username" => ['required'],
            
        ]);

        if($request['password'] === $account->password){
            $account->nama_lengkap = $request["nama_lengkap"];
            $account->email = $request["email"];
            $account->no_hp = $request["no_hp"];
            $account->username = $request["username"];
            // $account->password = $account->password;

            if ($account->save()){
                $user = $account->user;
                $user->username = $account->username;
                $user->password = $account->password;
                $user->id_account = $account->id_account;
                $user->id_admin = null;

                if($user->save()){
                    return response()->json([
                        'success' => true,
                        'message' => 'update account anda behasil!',
                        'accounts' => $account,
                        'users' => $user,
                    ], 200);

                } else {
                    return response()->json([
                        'success' => false,
                        'message' => 'update account anda gagal!',
                        'users' => $user,
                    ], 400);
                }
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'update account anda gagal!'
                ], 400);
            }
        } else {
            $account->nama_lengkap = $request["nama_lengkap"];
            $account->email = $request["email"];
            $account->no_hp = $request["no_hp"];
            $account->username = $request["username"];
            $account->password = Hash::make($request["password"]);

            if($account->save()){
                $user = $account->user;
                $user->username = $account->username;
                $user->password = $account->password;
                $user->id_account = $account->id_account;
                $user->id_admin = null;

                if($user->save()){
                    return response()->json([
                        'success' => true,
                        'message' => 'update account anda behasil!',
                        'accounts' => $account,
                        'users' => $user,
                    ], 200);
                } else {
                    return response()->json([
                        'success' => false,
                        'message' => 'update account anda gagal!',
                        'users' => $user,
                    ], 400);
                }
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'update account anda gagal!'
                ], 400);
            }
        }
    }

    public function destroy(account $account, Request $request){
        try{
            DB::table('accounts')
                ->where('id_account',$request->id);
                // ->update([
                //     'status'=>'nonaktif',
                // ]);

            return response() -> json([
                'success' => true,
                'message' => `account dihapus!`
            ],200);
        }catch(Exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Delete account gagal!'
            ]);
        }
    }
    
}
