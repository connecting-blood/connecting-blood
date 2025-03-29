<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBloodStockRequest;
use App\Http\Requests\UpdateBloodStockRequest;
use App\Models\BloodStock;
use AppConfig;
use Illuminate\Validation\ValidationException;

class BloodStockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return BloodStock::paginate(config('app_config.perPage'));
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
    public function store(StoreBloodStockRequest $request)
    {
        $baseController = new BaseController();
        try {
            $fields = $request->validate([
                'bbu_id' => 'required|exists:blood_storage_units,id',
                'blood_type' => [
                    'required',
                    'exists:blood_types,blood'
                ],
                'expire_at' => 'required|date|after:tomorrow',
                'units' => 'required|integer',
            ]);
            $BloodBank = BloodStock::create($fields);
            return $baseController->sendResponse($BloodBank, 'Blood Bank Created Successfully');
        } catch (ValidationException $e) {
            return $baseController->validationError($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(BloodStock $bloodStock)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BloodStock $bloodStock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBloodStockRequest $request, BloodStock $bloodStock)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BloodStock $bloodStock)
    {
        //
    }
}
