<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\AuthRequest;

class AuthController extends Controller
{
    public function register(AuthRequest $req)
    {
        $creds = $req->all();
        $creds['password'] = Hash::make($creds['password']);

        return User::create($creds);
    }

    public function login(AuthRequest $req)
    {
        if (Auth::attempt($req->all())) {
            $req->session()->regenerate();
            return $req->user();
        }
        throw new ValidationException('Incorrect email/password');
    }

    public function logout()
    {
        return Auth::logout();
    }
}
