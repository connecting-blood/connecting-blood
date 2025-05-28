<?php
return [
    'perPage'      => 10,
    'LoginAttempt' => 20,
    'userTypes'    => [
        'user'      => 'User',      // 0
        'admin'     => 'Admin',     // 1
        'staff'     => 'Staff',     // 2
        'hospital'  => 'Hospital',  // 3
        'developer' => 'Developer', // 4
    ],
    'BloodTypes'   => [
        'A+'  => [
            'to'   => ['A+', 'AB+'],
            'from' => ['A+', 'A-', 'O+', 'O-'],
        ],
        'O+'  => [
            'to'   => ['O+', 'A+', 'B+', 'AB+'],
            'from' => ['O+', 'O-'],
        ],
        'B+'  => [
            'to'   => ['B+', 'AB+'],
            'from' => ['B+', 'B-', 'O+', 'O-'],
        ],
        'AB+' => [
            'to'   => ['AB+'],
            'from' => ['Everyone'],
        ],
        'A-'  => [
            'to'   => ['A+', 'A-', 'AB+', 'AB-'],
            'from' => ['A-', 'O-'],
        ],
        'O-'  => [
            'to'   => ['Everyone'],
            'from' => ['O-'],
        ],
        'B-'  => [
            'to'   => ['B+', 'B-', 'AB+', 'AB-'],
            'from' => ['B-', 'O-'],
        ],
        'AB-' => [
            'to'   => ['AB+', 'AB-'],
            'from' => ['AB-', 'A-', 'B-', 'O-'],
        ],
    ],
    'BCUCategory'  => [
        'RedCross'            => 'Red Cross',
        'Private'             => 'Private',
        'CharitableVolunteer' => 'Charitable or Volunteer',
        'Govt.'               => 'Government',
    ],
    'defaultEmployees'    => ["anto@connectingblood.com",
        "lavanya@connectingblood.com",
        "magitha@connectingblood.com",
        "pallavi@connectingblood.com",
        "sahid@connectingblood.com"],
];
