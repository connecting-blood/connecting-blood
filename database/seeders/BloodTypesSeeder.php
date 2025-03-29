<?php

namespace Database\Seeders;

use App\Models\BloodTypes;
use AppConfig;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BloodTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $bloodTypes = config('app_config.BloodTypes');
        foreach ($bloodTypes as $blood => $value) {
            BloodTypes::create([
                'blood' => $blood,
                'to' => json_encode($value['to']),   // Convert array to JSON
                'from' => json_encode($value['from']) // Convert array to JSON
            ]);
        }
    }
}
