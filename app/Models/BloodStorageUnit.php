<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BloodStorageUnit extends Model
{
    /** @use HasFactory<\Database\Factories\BloodStorageUnitFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'user_id',
        'address',
        'district_id',
        'contact_person',
        'email',
        'email_verified_at',
        'parent_hospital_name',
        'license_no',
        'license_from',
        'license_to',
        'component_facility',
        'apheresis_facility',
        'helpline',
        'phone',
        'phone_verified_at',
        'category',
        'website',
        'no_of_beds',
        'lat',
        'long',
    ];
}
