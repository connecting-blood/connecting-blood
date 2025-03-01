<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBloodTypesRequest;
use App\Http\Requests\UpdateBloodTypesRequest;
use App\Models\BloodTypes;
use AppConfig;

class BloodTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $baseController = new BaseController();
        $blood = BloodTypes::all();
        $response = [];
        foreach ($blood as $bl) {
            array_push($response, array_merge($bl->toArray(), [
                "from" => json_decode($bl->from),
                "to" => json_decode($bl->to),
            ]));
        }
        return $baseController->sendResponse($response, 'Data Get Successfully');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBloodTypesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(BloodTypes $bloodTypes)
    {
        $bloods = BloodTypes::distinct()->pluck('blood'); // Fetch unique blood names
        $baseController = new BaseController();
        return $baseController->sendResponse($bloods, 'Unique blood list');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BloodTypes $bloodTypes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBloodTypesRequest $request, BloodTypes $bloodTypes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BloodTypes $bloodTypes)
    {
        //
    }
}
