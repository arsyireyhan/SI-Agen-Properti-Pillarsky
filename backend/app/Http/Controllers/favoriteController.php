<?php

namespace App\Http\Controllers;

use App\Models\favorite;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class favoriteController extends Controller
{
    public function index(){
        // $favorite = DB::table('favorites')->select('*')->get();

        $favorite = DB::table('favorites')
                    ->join('propertys','favorites.id_property','=','propertys.id_property')
                    ->join('accounts','favorites.id_account','=','accounts.id_account')
                    ->select(
                        'favorites.id_favorite',
                        'accounts.id_account',
                        'propertys.id_property',
                        'propertys.status',
                        'propertys.tujuan_properti',
                        'propertys.nama_properti',
                        'propertys.lokasi',
                        'propertys.luas',
                        'propertys.kamar_tidur',
                        'propertys.toilet',
                        'propertys.image',
                        )
                    ->get();
                    
        if(count($favorite)>0){
            return response()->json([
                'success' => true,
                'message' => 'data favorite berhasil diambil!',
                'favorite' => $favorite
            ]);
        }
        return response()->json([
            'message' => 'data property kosong!',
            'favorite' => null
        ], 204);
    }

    public function show(favorite $favorite){
        

    }

    public function store(Request $request){
        $request->validate([
            "id_property" => ['required'],
            "id_account" => ['required'],
        ]);

        $favorite = new favorite();
        $favorite->id_property = $request["id_property"];
        $favorite->id_account = $request["id_account"];

        if($favorite->save()){
            return response()->json([
                'success' => true,
                'message' => 'Item Berhasil Ditambahkan ke Favorite',
                'favorite' => $favorite,
            ],200);
        } else {
            return response()->json([
                'success' => false,
                'message'=> 'Item Gagal Diinputkan ke Favorite',
                'favorite' => $favorite,
            ], 400);
        }
    }

    public function destroy(Request $request){
        try{
            DB::table('favorites')
                ->where('id_favorite', $request->id)->delete();

            return response()->json([
                'success'=> true,
                'message'=> 'Item Berhasil Dihapus!'
            ]);
            
        } catch (Exception $e) {
            return response()->json([
                'success'=> false,
                'message'=> 'Item Gagal Dihapus!'
            ],500);
        }
    }

}
