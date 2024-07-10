<?php

namespace App\Http\Controllers;

use App\Models\transaksi_iklan;
use Illuminate\Http\Request;
use App\Models\property;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use exception;

class TransaksiController extends Controller
{
    public function show ($id){
        $transaksi = DB::table('transaksi_iklans')
                        ->select('transaksi_iklans.*','accounts.nama_lengkap', 'propertys.nama_properti')
                        ->join('accounts', 'transaksi_iklans.id_account', '=', 'accounts.id_account')
                        ->join('propertys', 'transaksi_iklans.id_property', '=', 'propertys.id_property')
                        ->where('transaksi_iklans.id_transaksi_iklan', $id)
                        ->first();

        return response()->json([
            "success" => true,
            "message" => "data akun berhasil diambil",
            "transaksi_iklan" => $transaksi
        ]);
    }

    public function index (Request $request) {
        $transaksiAdmin = DB::table('transaksi_iklans')
                            ->select('transaksi_iklans.*','accounts.nama_lengkap', 'propertys.nama_properti')
                            ->join('accounts', 'transaksi_iklans.id_account', '=', 'accounts.id_account')
                            ->join('propertys', 'transaksi_iklans.id_property', '=', 'propertys.id_property')
                            ->where('transaksi_iklans.status','Menunggu Pembayaran')
                            ->get();
        
        if(count($transaksiAdmin)>0){
            return response()->json([
                'success' => true,
                'message' => 'Data  Berhasil Diambil!',
                'transaksi' => $transaksiAdmin
            ], 200);
        }

        return response()->json([
            'message' => 'Data Tidak Tersedia!',
            'transaksi' => null
        ], 204);
    }

    public function uploadPembayaran (Request $request, $id){
        $data = transaksi_iklan::find($id);
        
        if (!$data) {
            return response()->json([
                'success' => false,
                'message' => 'Record not found!',
            ], 404);
        }
            $image = time() . '.' . $request->file('image')->getClientOriginalName();
            $request->file('image')->move(public_path('BuktiPembayaran'), $image);
            $data->image = $image;     

        if($data->save()){         
            return response()->json([
                'success' => true,
                'message' => 'bukti pembayaran berhasil diupload!',
                'Bukti_Pembayaran' => $data,
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'bukti pembayaran gagal diupload!',
                'Bukti_Pembayaran' => $data,
            ], 400);
        }
    }

    public function editStatusPembayaranLunas ($id){
        try{
            $cek = DB::table('transaksi_iklans')
                    ->select('status')
                    ->where('id_transaksi_iklan',$id)
                    ->first();
            
            if($cek->status === "Menunggu Pembayaran"){
                DB::table('transaksi_iklans')
                    ->where('id_transaksi_iklan',$id)
                    ->update([
                        'status'=>'Lunas',
                        'broadcast_msg' => null
                    ]);
                return response() -> json([
                    'success' => true,
                    'message' => 'Status Pembayaran Berhasil Diubah!'
                ],200);
            } else {
                return response() -> json([
                    'success' => false,
                    'message' => 'Status Pembayaran Gagal Diubah!',
                ],400);
            }
        } catch(exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Status Pembayaran Gagal Diubah!'
            ]);
        }
    }
    public function editStatusPembayaranPending ($id){
        try{
            $cek = DB::table('transaksi_iklans')
                    ->select('status')
                    ->where('id_transaksi_iklan',$id)
                    ->first();
            
            if($cek->status === "Lunas"){
                DB::table('transaksi_iklans')
                    ->where('id_transaksi_iklan',$id)
                    ->update([
                        'status'=>'Menunggu Pembayaran',
                    ]);
                return response() -> json([
                    'success' => true,
                    'message' => 'Status Pembayaran Berhasil Diubah!'
                ],200);
            } else {
                return response() -> json([
                    'success' => false,
                    'message' => 'Status Pembayaran Gagal Diubah!',
                ],400);
            }
        } catch(exception $e){
            return response()->json([
                'success' => false,
                'message' => 'Status Pembayaran Gagal Diubah!'
            ]);
        }
    }

    public function showBuktiPembayaran ($id){
        // mengambil data berupa image bukti pembayaran yang diupload oleh user
        $data = DB::table('transaksi_iklans')
                    ->select('transaksi_iklans.image','transaksi_iklans.id_transaksi_iklan','accounts.nama_lengkap','propertys.nama_properti')
                    ->join('accounts','transaksi_iklans.id_account','=','accounts.id_account')
                    ->join('propertys','transaksi_iklans.id_property','=','propertys.id_property')
                    ->where('transaksi_iklans.id_transaksi_iklan', $id)
                    ->first();
        
        if (!$data) {
            return response()->json([
                "success" => false,
                "message" => "Data not found",
            ], 404);
        }

        $filePath = public_path('BuktiPembayaran/'.$data->image);

        if (!File::exists($filePath)) {
            return response()->json([
                "success" => false,
                "message" => "Image not found",
            ], 404);
        }

        $file = File::get($filePath);
        $type = File::mimeType($filePath);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return response()->json([
            "success" => true,
            "message" => "data akun berhasil diambil",
            "Pembayaran" => $data
        ]);
    }

    public function sendMessageTransaksi (Request $request, $id){
        $data = transaksi_iklan::find($id);
        
        $request->validate([
            "broadcast_msg" => [],
        ]);

        $broadcast = $request["broadcast_msg"];
        $data->broadcast_msg = $broadcast;

        if($data->save()){         
            return response()->json([
                'success' => true,
                'message' => 'Pesan Berhasil Terkirim!',
                'Broadcast' => $data,
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Pesan Gagal Terkirim!',
                'Broadcast' => $data,
            ], 400);
        }
    }

    public function editMessageTransaksi (Request $request, transaksi_iklan $transaksi_iklan){
        //mengubah message/warning yang dikirimkan kepada user dari admin
    }
        
}
