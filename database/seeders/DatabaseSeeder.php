<?php
namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(BloodTypesSeeder::class);
        $this->call(DistrictsSeeder::class);

        User::factory()->create([
            'name'  => 'AshifSadiq',
            'email' => 'ashif@connectingblood.com',
            'type'  => config('app_config.userTypes.developer'),
        ]);
        foreach (config("app_config.defaultEmployees") as $key => $value) {
            User::factory()->create([
                'name'  => $value,
                'email' => $value,
                'type'  => config('app_config.userTypes.admin'),
            ]);
        }
    }
}
