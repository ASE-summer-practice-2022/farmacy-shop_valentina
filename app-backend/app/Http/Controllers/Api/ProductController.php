<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getProducts(Request $req)
    {
        return response()->json(Product::all());
    }

    public function getProduct($id)
    {
        $product = Product::findOrFail($id);
        return response()->json($product);
    }
}
