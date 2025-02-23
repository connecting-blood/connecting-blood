<?php

namespace App\Http\Controllers;

use App\Http\Resources\BloodStorageUnitResource;
use App\Models\BloodStock;
use App\Models\BloodStorageUnit;
use App\Models\BloodTypes;
use AppConfig;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Laravel\Sanctum\PersonalAccessToken;

class BloodStorageUnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $bloods = BloodTypes::distinct()->pluck('blood'); // Fetch distinct blood types
        $baseController = new BaseController();

        $bloodStorageUnits = BloodStorageUnit::paginate(AppConfig::$paginate['perPage']);
        $modifiedBloodStorageUnits = $bloodStorageUnits->getCollection()->map(function ($unit) use ($bloods) {
            $bloodStocks = BloodStock::where('bbu_id', $unit->id)
                ->selectRaw('blood_type, SUM(units) as total_units')
                ->groupBy('blood_type')
                ->pluck('total_units', 'blood_type');

            // Convert to array
            $bloodsAvailable = $bloodStocks->toArray();

            // Get total units across all blood types
            $unit->total_units = array_sum($bloodsAvailable);
            $unit->bloodsAvailable = $bloodsAvailable;

            return $unit;
        });

        // Replace the modified collection in the paginator
        $bloodStorageUnits->setCollection($modifiedBloodStorageUnits);

        return $baseController->sendResponse($bloodStorageUnits, '');
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return true;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $baseController = new BaseController();
        try {
            $token = PersonalAccessToken::findToken($request->bearerToken());
            if (!$token) {
                return response()->json(['message' => 'Unauthorized'], 401);
            }
            $user = $token->tokenable;
            $fields = $request->validate([
                'name' => 'required|min:5',
                'address' => 'required|min:5',
                'district_id' => 'required|exists:districts,id',
                'email' => 'sometimes|required|email:rfc,dns',
                'phone' => 'sometimes|required|digits:10',
                'category' => [Rule::in(array_keys(AppConfig::$BCUCategory)),],
                'lat' => 'required',
                'long' => 'required',
                'license_no' => 'nullable|string',
                'license_from' => 'required_with:license_no|date',
                'license_to' => 'required_with:license_no|after:tomorrow|after:license_from',
            ]);
            $accessTypes = [
                AppConfig::$userTypes['developer'],
                AppConfig::$userTypes['hospital'],
            ];
            if (!in_array($user['type'], $accessTypes)) {
                return $baseController->sendError('This ' . $user['type'] . ' don\'t have access to create Blood Storage Unit', $user->type, 422);
            }
            $fields['user_id'] = $user->id;

            $BSU = BloodStorageUnit::create($fields);
            return $baseController->sendResponse($BSU, 'Blood Storage Unit Created Successfully');
        } catch (ValidationException $e) {
            return $baseController->sendError('Validation Error', $e->errors(), 422);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $bloodStorageUnit = BloodStorageUnit::find($id);
        $baseController = new BaseController();
        if ($bloodStorageUnit)
            return $baseController->sendResponse(new BloodStorageUnitResource($bloodStorageUnit), 'Blood Storage Unit Retrieved Successfully');
        else
            return $baseController->sendError([], 'Cannot Find Blood Storage Unit');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BloodStorageUnit $bloodStorageUnit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BloodStorageUnit $bloodStorageUnit)
    {
        $baseController = new BaseController();
        try {
            $fields = $request->validate([
                'name' => 'required|min:5',
                'address' => 'required|min:5',
                'district_id' => 'required|exists:districts,id',
                'contact_person' => 'sometimes|min:4',
                'email' => 'sometimes|required|email:rfc,dns',
                'parent_hospital_name' => 'sometimes|min:4',
                'phone' => 'sometimes|required|digits:10',
                'category' => [Rule::in(array_keys(AppConfig::$BCUCategory)),],
                'lat' => 'required',
                'long' => 'required',
                'license_no' => 'nullable|string',
                'license_from' => 'required_with:license_no|date',
                'license_to' => 'required_with:license_no|after:tomorrow|after:license_from',
                'component_facility' => 'sometimes|boolean',
                'apheresis_facility' => 'sometimes|boolean',
                'helpline' => 'sometimes|digits:10',
                'website' => 'sometimes|url:http,https',
                'no_of_beds' => 'sometimes|numeric',
            ]);
            $bloodStorageUnit->update($fields);
            return $baseController->sendResponse(
                new BloodStorageUnitResource(
                    $bloodStorageUnit
                ),
                'Blood Storage Unit Updated Successfully'
            );
        } catch (ValidationException $e) {
            return $baseController->sendError('Validation Error', $e->errors(), 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BloodStorageUnit $bloodStorageUnit)
    {
        $baseController = new BaseController();
        $bloodStorageUnit->delete();
        return $baseController->sendResponse(
            new BloodStorageUnitResource($bloodStorageUnit),
            'Blood Storage Unit deleted successfully'
        );
    }
}
