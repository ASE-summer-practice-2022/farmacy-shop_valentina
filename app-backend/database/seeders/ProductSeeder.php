<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'name' => 'Medicine 1',
            'price' => 1250,
            'description' => 'Description of medicine 1',
        ]);
        Product::create([
            'name' => 'Medicine 2',
            'price' => 350,
            'description' => 'Description of medicine 2',
        ]);
        Product::create([
            'name' => 'Medicine 3',
            'price' => 500,
            'description' => 'Description of medicine 3',
        ]);
        Product::create([
            'name' => 'Medicine 4',
            'price' => 800,
            'description' => 'Description of medicine 4',
        ]);
        Product::create([
            'name' => 'Medicine 5',
            'price' => 1000,
            'description' => 'Description of medicine 5',
        ]);
        Product::create([
            'name' => 'Medicine 6',
            'price' => 650,
            'description' => 'Description of medicine 6',
        ]);
    }
}
