<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDistrictsRequest;
use App\Http\Requests\UpdateDistrictsRequest;
use App\Models\Districts;
use App\Http\Controllers\BaseController as BaseController;
use AppConfig;

class DistrictsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $states = Districts::distinct()->pluck('state'); // Fetch unique state names
        $baseController = new BaseController();
        return $baseController->sendResponse($states, 'Unique states list');

    }
    public function show($districtName)
    {
        $baseController = new BaseController();
        // SELECT * FROM `districts` WHERE state = 'Andhra Pradesh';
        $districts = Districts::where('state', $districtName)->get();
        $districtsNameOnly = [];
        for ($i = 0; $i < count($districts); $i++) {
            array_push($districtsNameOnly, ['id' => $districts[$i]['id'], 'district' => $districts[$i]['district']]);
        }
        return $baseController->sendResponse($districtsNameOnly, 'Your filtered district');
    }
}
