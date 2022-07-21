<?php

namespace App\Http\Controllers\Api;

use App\Models\CartItem;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartItemController extends Controller
{
    public function getCartItems()
    {
        $cartItems = CartItem::where('user_id', Auth::id())->get();
        return response()->json($cartItems);
    }

    public function getCartItem($id)
    {
        $cartItem = CartItem::findOrFail($id);
        return response()->json($cartItem);
    }

    public function createCartItem(Request $req) {
        $cartItem = $req->all();
        $cartItem['user_id'] = Auth::id();
        return response()->json(CartItem::create($cartItem), 201);
    }

    public function updateCartItem(Request $req, $id) {
        $cartItem = CartItem::findOrFail($id);
        $cartItem->update($req->all());
        return response()->json($cartItem);
    }

    public function deleteCartItem($id) {
        CartItem::findOrFail($id)->delete();
        return response()->json('', 204);
    }

    public function deleteCartItems() {
        CartItem::where('user_id', Auth::id())->delete();
        return response()->json('', 204);
    }
}
