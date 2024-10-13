<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use User;

class Modelo extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'mod_json'];

    protected $casts = ['mod_json' => 'array'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
