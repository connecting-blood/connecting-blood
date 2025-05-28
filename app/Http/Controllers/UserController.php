<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function authIndex(Request $request)
    {
        $users = User::select(["name", "type", "email", "phone"])->paginate();
        // lopps users
        $users->getCollection()->transform(function ($user) {
            $user->type = config('app_config.userTypes.' . $user->type);
            return $user;
        });
        return Inertia::render("Users/Users", ['users' => $users]);
    }
}
