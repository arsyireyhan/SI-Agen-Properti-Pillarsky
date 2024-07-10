<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class account extends Model
{
    use HasFactory;
    use HasApiTokens;
    
    protected $table = "accounts";

    protected $primaryKey = "id_account";

    public $timestamps = false;

    public function user(){
        return $this->hasOne(user::class,"id_account");
    }

    public function property (){
        return $this->hasMany(property::class,"id_property");
    }

    public function favorite (){
        return $this->belongsToMany(favorite::class,"id_favorit");
    }

}
