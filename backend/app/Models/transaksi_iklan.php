<?php

namespace App\Models;

use Google\Service\Sheets\ProtectedRange;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaksi_iklan extends Model
{
    use HasFactory;

    protected $table = "transaksi_iklans";

    protected $primaryKey = 'id_transaksi_iklan';

    public $timestamps = false;

    protected $fillable = ['id_transaksi_iklan', 'id_property','id_account', 'id_bundle', 'status', 'image'];

    public function account(){
        return $this->belongsTo(account::class,"id_account");
    }
    public function property(){
        return $this->belongsTo(property::class,"id_property");
    }
    public function bundle(){
        return $this->belongsTo(bundle::class,"id_bundle");
    }
}
