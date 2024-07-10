<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Contracts\Auth\Authenticatable;

class admin extends Model 
{
    use HasFactory;
    use HasApiTokens;
    
    protected $table = "admins";

    protected $primaryKey = 'id_admin';

    public $timestamps = false;

    public function user(){
        return $this->hasOne(user::class,"id_admin");
    }

}
