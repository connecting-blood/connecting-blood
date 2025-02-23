<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blood_storage_units', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('name');
            $table->string('address');
            $table->integer('district_id');
            $table->string('contact_person')->nullable();
            $table->string('email')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('parent_hospital_name')->nullable();
            $table->string('license_no')->nullable();
            $table->dateTime('license_from')->nullable();
            $table->dateTime('license_to')->nullable();
            $table->boolean('component_facility')->nullable();
            $table->boolean('apheresis_facility')->nullable();
            $table->string('helpline')->nullable();
            $table->string('phone')->nullable();
            $table->timestamp('phone_verified_at')->nullable();
            $table->string('category');
            $table->string('website')->nullable();
            $table->integer('no_of_beds')->default(0);
            $table->string('lat');
            $table->string('long');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blood_storage_units');
    }
};
