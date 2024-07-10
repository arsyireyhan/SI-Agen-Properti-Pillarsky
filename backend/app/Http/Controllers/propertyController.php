<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\account;
use App\Models\transaksi_iklan;
use App\Models\property;
use App\Models\favorite;
use Illuminate\Support\Facades\DB;
use Intervention\Image\Facades\Image;
use exception;

// INSTALL DULU (composer require intervention/image) DI TERMINAL!!!

class propertyController extends Controller
{
    
    public function index (Request $request) { //perlu perbaikan
        $property = DB::table('propertys')
                        ->select('propertys.*','transaksi_iklans.id_transaksi_iklan','transaksi_iklans.broadcast_msg', 'transaksi_iklans.status')
                        ->join('transaksi_iklans','transaksi_iklans.id_property', '=', 'propertys.id_property')
                        ->get();

        if(count($property)>0){
            return response()->json([
                'success' => true,
                'message' => 'data property berhasil diambil!',
                'propertys' => $property
            ]);
        }
        return response()->json([
            'message' => 'data property kosong!',
            'propertys' => null
        ], 204);
    }

    public function indexLunas (Request $request){
        $property = DB::table('propertys')
                        ->select('propertys.*')
                        ->join('transaksi_iklans','transaksi_iklans.id_property', '=', 'propertys.id_property')
                        ->where('transaksi_iklans.status', '=', 'Lunas')
                        ->get();

        if(count($property)>0){
            return response()->json([
                'success' => true,
                'message' => 'data property berhasil diambil!',
                'propertys' => $property
            ]);
        }
        return response()->json([
            'message' => 'data property kosong!',
            'propertys' => null
        ], 204);
    }

    public function show ($id){
        $transaksi = DB::table('propertys')
                        ->select('propertys.*','accounts.nama_lengkap', 'accounts.no_hp')
                        ->join('accounts', 'propertys.id_account', '=', 'accounts.id_account')
                        ->where('propertys.id_property', $id)
                        ->first();

        $transaksi_iklan = DB::table('transaksi_iklans')
                            ->select('transaksi_iklans.id_transaksi_iklan')
                            ->join('propertys', 'transaksi_iklans.id_property', '=', 'propertys.id_property')
                            ->where('propertys.id_property', $id)
                            ->first();
        $transaksi->id_transaksi_iklan = $transaksi_iklan->id_transaksi_iklan;

        return response()->json([
            "success" => true,
            "message" => "data akun berhasil diambil",
            "property" => $transaksi
        ]);
    }


     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store (Request $request){
        $request->validate([
            "id_account" => [],
            "tujuan_properti" => [],
            "nama_properti" => [],
            "lokasi" => [],
            "link_maps" => [],
            "luas" => [],
            "kamar_tidur" => [],
            "toilet" => [],
            "detail_properti" => [],
            "harga_jual" => [],
            "harga_sewa" => [],
            "image" => "image|mimes:jpeg,png,jpg,gif|max:2048",
            
        ]);
        $property = new property();
        $property->id_account = $request["id_account"];
        $property->tujuan_properti = $request["tujuan_properti"];
        $property->nama_properti = $request["nama_properti"];
        $property->lokasi = $request["lokasi"];
        $property->link_maps = $request["link_maps"];
        $property->luas = $request["luas"];
        $property->kamar_tidur = $request["kamar_tidur"];
        $property->toilet = $request["toilet"];
        $property->detail_properti = $request["detail_properti"];
        $property->status = 'Tersedia';

        if ($request->tujuan_properti == 'Jual') {
            $property->harga_jual = $request["harga_jual"];
        } 
        else if ($request->tujuan_properti == 'Sewa') {
            $property->harga_sewa = $request["harga_sewa"];
        }
        if($request->has('image')){
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalName();
            $imagePath = public_path('ImageProperti').'/'.$imageName;
            
            //size 800 x 400
            Image::make($image->getRealPath())->resize(800, 400)->save($imagePath);
            $property->image = $imageName;
        }
        if($property->save()){
            $transaksi_iklan = new transaksi_iklan;
            $transaksi_iklan->id_property = $property->id_property;
            $transaksi_iklan->id_account = $property->id_account;
            $transaksi_iklan->status = "Menunggu Pembayaran";
            $transaksi_iklan->image = 'no-preview-available.png';

            if($transaksi_iklan->save()){
                return response()->json([
                    'success' => true,
                    'message' => 'Pengajuan Pemasangan Iklan Berhasil!',
                    'property' => $property,
                    'transaksi_iklan' => $transaksi_iklan,

                ], 200);
            } 
            else {
                return response()->json([
                    'success' => false,
                    'message' => 'Pengajuan Pemasangan Iklan Gagal!',
                    'transaksi_iklan' => $transaksi_iklan,
                ], 400);
            }
        }
        else{
            return response()->json([
                'success' => false,
                'message' => "Pengajuan Pemasangan Iklan Gagal",
                'property' => $property,
            ], 400);
        }
    }

    public function storePropertiMobile (Request $request){
        $request->validate([
            "id_account" => [],
            "tujuan_properti" => [],
            "nama_properti" => [],
            "lokasi" => [],
            "link_maps" => [],
            "luas" => [],
            "kamar_tidur" => [],
            "toilet" => [],
            "detail_properti" => [],
            "harga_jual" => [],
            "harga_sewa" => [],
        ]);
        $property = new property();
        $property->id_account = $request["id_account"];
        $property->tujuan_properti = $request["tujuan_properti"];
        $property->nama_properti = $request["nama_properti"];
        $property->lokasi = $request["lokasi"];
        $property->link_maps = $request["link_maps"];
        $property->luas = $request["luas"];
        $property->kamar_tidur = $request["kamar_tidur"];
        $property->toilet = $request["toilet"];
        $property->detail_properti = $request["detail_properti"];
        $property->status = 'Tersedia';

        if ($request->tujuan_properti == 'Jual') {
            $property->harga_jual = $request["harga_jual"];
        } 
        else if ($request->tujuan_properti == 'Sewa') {
            $property->harga_sewa = $request["harga_sewa"];
        }
        if($request->has('image')){
            // $image = $request->file('image');
            // $imageName = time().'.'.$image->getClientOriginalName();
            // $imagePath = public_path('ImageProperti').'/'.$imageName;

            $imageName = time().'.jpg';
            file_put_contents('ImageProperti/'.$imageName,base64_decode($request->image));
            // $imagePath = public_path('ImageProperti').'/'.$imageName;
            
            //size 800 x 400
            // Image::make($imagePath)->resize(800, 400)->save($imagePath);
            $property->image = $imageName;
        }
        if($property->save()){
            $transaksi_iklan = new transaksi_iklan;
            $transaksi_iklan->id_property = $property->id_property;
            $transaksi_iklan->id_account = $property->id_account;
            $transaksi_iklan->status = "Menunggu Pembayaran";
            $transaksi_iklan->image = 'no-preview-available.png';

            if($transaksi_iklan->save()){
                return response()->json([
                    'success' => true,
                    'message' => 'Pengajuan Pemasangan Iklan Berhasil!',
                    'property' => $property,
                    'transaksi_iklan' => $transaksi_iklan,

                ], 200);
            } 
            else {
                return response()->json([
                    'success' => false,
                    'message' => 'Pengajuan Pemasangan Iklan Gagal!',
                    'transaksi_iklan' => $transaksi_iklan,
                ], 400);
            }
        }
        else{
            return response()->json([
                'success' => false,
                'message' => "Pengajuan Pemasangan Iklan Gagal",
                'property' => $property,
            ], 400);
        }  
    }

    public function update (request $request, property $property){
        $request->validate([
            "nama_properti" => [],
            "lokasi" => [],
            "link_maps" => [],
            "detail_properti" => [],
            "image" => "image|mimes:jpeg,png,jpg,gif|max:2048",
        ]);
        $property->nama_properti = $request["nama_properti"];
        $property->lokasi = $request["lokasi"];
        $property->link_maps = $request["link_maps"];
        $property->detail_properti = $request["detail_properti"];
        if($request->has('image')){
            $image = $request->file('image');
            $imageName = time().'.'.$image->getClientOriginalName();
            $imagePath = public_path('ImageProperti').'/'.$imageName;
            //size 800 x 400
            Image::make($image->getRealPath())->resize(800, 400)->save($imagePath);
            $property->image = $imageName;
        }
        if($property->save()){
            return response()->json([
                "success" => true,
                "Message" => "Update Properti Anda Berhasil!",
                "properti" => $property,
            ], 200);
        } else {
            return response()->json([
                "success" => false,
                "Message" => "Update Properti Anda Gagal!",
                "properti" => $property,
            ], 400);
        }

    }

    public function destroy (Request $request){
        try{
           
            DB::table('favorites')
                ->where('id_property', $request->id)->delete();

            DB::table('transaksi_iklans')
                ->where('id_property', $request->id)->delete();

            //delete item property
            DB::table('propertys')
                ->where('id_property', $request->id)->delete();

            return response()->json([
                'success'=> true,
                'message'=> 'Properti Berhasil Dihapus!'
            ]);

            
        } catch (Exception $e) {
            return response()->json([
                'success'=> false,
                'message'=> 'Properti Gagal Dihapus!'
            ],500);
        }
    }
    
}
