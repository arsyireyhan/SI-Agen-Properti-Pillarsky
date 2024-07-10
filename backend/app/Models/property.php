<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class property extends Model
{
    use HasFactory;
    
    protected $table = "propertys";

    protected $primaryKey = 'id_property';

    public $timestamps = false;

    public function account(){
        return $this->belongsTo(account::class,"id_account");
    }
    public function transaksi_iklan(){
        return $this->hasOne(transaksi_iklan::class,"id_transaksi_iklan");
    }
    public function favorite(){
        return $this->hasMany(favorite::class,"id_account");
    }

}
