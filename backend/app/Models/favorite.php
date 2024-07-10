<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class favorite extends Model
{
    use HasFactory;

    protected $table = "favorites";

    protected $primaryKey = "id_favorit";

    public function account(){
        return $this-> belongsTo(account::class,'id_account');
    }
    public function property(){
        return $this-> belongsTo(admin::class,'id_property');
    }

}
