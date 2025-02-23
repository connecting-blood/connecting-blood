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
        return response()->json(
            BloodTypes::paginate(
                AppConfig::$paginate['perPage']
            )
        ); // Return all blood types as JSON
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
        //
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
