<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    use HasFactory;

    protected $table = 'cart_items';

    protected $primaryKey = 'id';

    protected $guarded = [];

    protected $casts = [];

    protected $appends = ['product'];

    public function getProductAttribute()
    {
        return Product::find($this->product_id);
    }
}
