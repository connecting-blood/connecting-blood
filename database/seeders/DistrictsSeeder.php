<?php

namespace Database\Seeders;

use App\Models\Districts;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class DistrictsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $jsonPath = resource_path('json/states-and-districts.json');
        $jsonData = File::get($jsonPath);
        $data = json_decode($jsonData, true);
        foreach ($data['states'] as $state) {
            $stateName = $state['state'];

            foreach ($state['districts'] as $districtName) {
                Districts::create([
                    'state' => $stateName,
                    'district' => $districtName,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
