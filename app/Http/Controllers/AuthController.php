<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\GetUserByHeader;
use App\Models\User;
use App\Models\UserLoginAttempt;
use AppConfig;
use Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\BaseController as BaseController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Inertia\Response;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rules\Password;
class AuthController extends Controller
{
    public function index(Request $request)
    {
        $user = $this->user($request);
        $whoHasAccess = ['developer', 'admin', 'staff'];
        $a = [];
        foreach ($whoHasAccess as $key => $value) {
            array_push($a, config('app_config.userTypes.' . $value));
        }
        // checking user has access;
        if (in_array($user->type, $a, true)) {
            return "yes";
        } else {
            return $a;
        }
    }
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }
    public function login(Request $request)
    {
        $baseController = new BaseController();
        $fields = $request->validate([
            'email' => 'required|email:rfc',
            'password' => 'required|min:8',
        ]);

        $user = User::where('email', $fields['email'])->first();

        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return $baseController->sendError('Invalid credentials', [], 401);
        }

        // Check if the request is from an API (mobile app)
        $token = $user->createToken('auth_token')->plainTextToken;
        return $baseController->sendResponse(
            [
                'user' => $user,
                'token' => $token,
            ],
            'Login Successfully'
        );
    }

    public function user(Request $request)
    {
        return $request->user();
    }
    public function newUser(Request $request)
    {
        $baseController = new BaseController();
        try {
            $request->validate([
                'email' => 'required|unique:users,email|lowercase|email:rfc',
                'name' => 'required|min:3',
                'phone' => 'sometimes|digits:10|unique:users,phone',
                'password' => [
                    'required',
                    'confirmed',
                    'min:8',
                    Password::min(8)
                        ->letters()
                        ->mixedCase()
                        ->numbers()
                        ->symbols(),
                ],
                // 'password_confirmation' => 'required_with:password|min:8'
            ]);
            $user = User::create($request->all());
            return $baseController->sendResponse(
                $user,
                'New User Created Successfully'
            );

        } catch (ValidationException $e) {
            return $baseController->sendError('Validation Error', $e->errors(), 422);
        }
    }

    public function update(Request $request)
    {
        $baseController = new BaseController();

        try {
            // Get user from token
            $user = $request->user();
            $UpdateUser = User::find($user->id);

            // Validate request
            $validatedData = $request->validate([
                'email' => 'sometimes|unique:users,email|lowercase|email:rfc',
                'name' => 'sometimes|min:3',
            ]);

            // Check if old password is correct before updating
            if ($request->filled('password')) {
                return $baseController->sendError('You Cannot update password', [], 400);
            }
            if ($request->filled('email')) {
                $validatedData['email_verified_at'] = null;
            }
            if ($request->filled('phone')) {
                $validatedData['phone'] = null;
            }

            // // Update user with validated data
            $UpdateUser->update($validatedData);

            return $baseController->sendResponse($UpdateUser, 'Updated Successfully');

        } catch (ValidationException $e) {
            return $baseController->sendError('Validation Error', $e->errors(), 422);
        } catch (\Exception $e) {
            return $baseController->sendError('Server Error', ['message' => $e->getMessage()], 500);
        }
    }

}
