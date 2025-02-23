<?php

class AppConfig
{
    public static $paginate = [
        'perPage' => 10
    ];
    public static $LoginAttempt = 20;
    public static $userTypes = [
        'user' => 'user', // 0
        'admin' => 'admin', // 1
        'staff' => 'staff', // 2
        'hospital' => 'hospital', // 3
        'developer' => 'developer' // 4
    ];
    public static $BloodTypes = [
        'A+' => [
            'to' => ['A+', 'AB+'],
            'from' => ['A+', 'A-', 'O+', 'O-'],
        ],
        'O+' => [
            'to' => ['O+', 'A+', 'B+', 'AB+'],
            'from' => ['O+', 'O-'],
        ],
        'B+' => [
            'to' => ['B+', 'AB+'],
            'from' => ['B+', 'B-', 'O+', 'O-'],
        ],
        'AB+' => [
            'to' => ['AB+'],
            'from' => ['Everyone'],
        ],
        'A-' => [
            'to' => ['A+', 'A-', 'AB+', 'AB-'],
            'from' => ['A-', 'O-'],
        ],
        'O-' => [
            'to' => ['Everyone'],
            'from' => ['O-'],
        ],
        'B-' => [
            'to' => ['B+', 'B-', 'AB+', 'AB-'],
            'from' => ['B-', 'O-'],
        ],
        'AB-' => [
            'to' => ['AB+', 'AB-'],
            'from' => ['AB-', 'A-', 'B-', 'O-'],
        ],
    ];
    public static $BCUCategory = [
        'RedCross' => 'Red Cross',
        'Private' => 'Private',
        'CharitableVolunteer' => 'Charitable or Volunteer',
        'Govt.' => 'Government'
    ];
}