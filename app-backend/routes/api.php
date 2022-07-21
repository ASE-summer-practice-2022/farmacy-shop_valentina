<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\CartItemController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('/login', 'login');
    Route::post('/logout', 'logout');
    Route::post('/register', 'register');
});

Route::get('/products', [ProductController::class, 'getProducts']);
Route::get('/products/{id}', [ProductController::class, 'getProduct']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $req) {
        return $req->user();
    });

    Route::controller(CartItemController::class)->group(function () {
        Route::prefix('/cart-items')->group(function () {
            Route::get('', 'getCartItems');
            Route::delete('', 'deleteCartItems');
            Route::post('', 'createCartItem');
            Route::get('/{id}', 'getCartItem');
            Route::put('/{id}', 'updateCartItem');
            Route::delete('/{id}', 'deleteCartItem');
        });
    });
});