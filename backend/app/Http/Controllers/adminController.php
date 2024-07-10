<?php

namespace App\Http\Controllers;

use App\Models\admin;
use App\Models\user;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;

class adminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admin = admin::latest()->paginate(10);
        return[
            "status" => 1,
            "data" => $admin
        ];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request 
     * @return \Illuminate\Http\Response 
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama_lengkap' => 'required',
            'username' => 'required',
            'password' => 'required'
        ]);

        $admin = new admin;
        $admin->nama_lengkap = $request["nama_lengkap"];
        $admin->username = $request["username"];
        $admin->password = Hash::make($request["password"]);

        if($admin->save()){
            $user = new user();
            $user->id_account = null;
            $user->id_admin = $admin->id_admin;
            $user->username = $admin->username;
            $user->password = $admin->password;
            
            if($user->save()){
                return response()->json([
                    'success' => true,
                    'message' => 'Add Account Berhasil!',
                    'admin' => $admin,
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
                'accounts' =>$admin,
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(admin $admin)
    {
        return [
            "status" => 1,
            "data" => $admin
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(admin $admin)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, admin $admin)
    {
        $request->validate([
            'nama_lengkap' => 'required',
            'username' => 'required',
            'password' => 'required'
        ]);

        $admin->update($request->all());

        return[
            "status" => 1,
            "data" => $admin,
            "msg" => "data admin berhasil diubah"
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(admin $admin)
    {
        $admin->delete();
        return[
            "status" => 1,
            "data" => $admin,
            "msg" => "data admin berhasil dihapus"
        ];
    }

    
}
