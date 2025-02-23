<?php

namespace App\Http\Resources;

use AppConfig;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BloodStorageUnitResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return array_merge(parent::toArray($request), [
            'category' => AppConfig::$BCUCategory[$request->category]
        ]);
    }
}
