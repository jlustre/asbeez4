<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'super-admin',
            'email' => 'super-admin@asbeez.com',
            'email_verified_at' => now(),
            'password'=> Hash::make('password'),
        ])->assignRole('vendor', 'super-admin');

        User::create([
            'name' => 'admin',
            'email' => 'admin@asbeez.com',
            'email_verified_at' => now(),
            'password'=> Hash::make('password'),
        ])->assignRole('vendor', 'admin');

        User::create([
            'name' => 'vendor',
            'email' => 'vendor@asbeez.com',
            'email_verified_at' => now(),
            'password'=> Hash::make('password'),
        ])->assignRole('vendor');

        User::create([
            'name' => 'user',
            'email' => 'user@asbeez.com',
            'email_verified_at' => now(),
            'password'=> Hash::make('password'),
        ])->assignRole('user');
    }
}