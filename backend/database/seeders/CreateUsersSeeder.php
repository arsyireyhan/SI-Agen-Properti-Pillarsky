<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\user;

class CreateUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'nama_lengkap' => 'Admin',
                'email' => 'admin@onlinewebtutorblog.com',
                'is_admin' => '1',
                'no_hp' => '098172872',
                'umur' => '20',
                'alamat' => 'bukit',
                'username' => 'admin',
                'password' => bcrypt('123456'),
            ],
            [
                'nama_lengkap' => 'User',
                'email' => 'normal@onlinewebtutorblog.com',
                'is_admin' => '0',
                'no_hp' => '098172872',
                'umur' => '20',
                'alamat' => 'bukit',
                'username' => 'user',
                'password' => bcrypt('123456'),
            ],
        ];

        foreach ($user as $key => $value){
            user::create($value);
        }
    }
}
