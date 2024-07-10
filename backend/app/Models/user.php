<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;


class user extends Authenticatable
{
    use HasFactory;
    use HasApiTokens;
    use Notifiable;
    
    protected $table = 'users';
    protected $primaryKey = 'id';
    public $incrementing = true;
    public $timestamps = false;

    public function account(){
        return $this-> belongsTo(account::class,'id_account');
    }
    public function admin(){
        return $this-> belongsTo(admin::class,'id_admin');
    }

}
