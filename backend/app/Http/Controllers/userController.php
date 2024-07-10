<?php

namespace App\Http\Controllers;

use App\Models\user;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class userController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = DB::table('users')
                    ->select('*')
                    ->get();
                    
        if(count($user)>0){
            return response()->json([
                'success' => true,
                'message' => 'data user berhasil diambil!',
                'user' => $user
            ]);
        }
        return response()->json([
            'message' => 'data user kosong!',
            'user' => null
        ], 204);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            "nama_lengkap" => 'required',
            "email" => 'required',
            "no_hp" => 'required',
            "umur" => 'required',
            "alamat" => 'required',
            "username" => 'required',
            "password"=> 'required'

        ]);

        $user = user::create([
            'nama_lengkap' => $request->input('nama_lengkap'),
            'email' => $request->input('email'),
            'no_hp' => $request->input('no_hp'),
            'umur' => $request->input('umur'),
            'alamat' => $request->input('alamat'),
            'username' => $request->input('username'),
            'password' => $request->input('password')
        ]);

        // $user->createToken('remember_token')->plainTextToken;
        
        return [
            "status" => 1,
            "data" => $user
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\user  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = user::findOrFail($id);
        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\user  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(user $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\user  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, user $user)
    {
        $request->validate([
            "nama_lengkap",
            "email",
            "no_hp",
            "umur",
            "alamat",
            "username",
            "password"
        ]);

        $user->update($request->all());

        return [
            "status" => 1,
            "data" => $user,
            "msg" => "data berhasil diubah"
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\user  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(user $user)
    {
        $user->delete();
        return[
            "status" => 1,
            "data" => $user,
            "msg" => "data berhasil diubah"
        ];
    }


    
}
