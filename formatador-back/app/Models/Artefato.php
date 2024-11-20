<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Projeto;
use User;

class Artefato extends Model
{
    use HasFactory;

    protected $fillable = [ 'user_id', 'pro_id', 'arquivo', 'descricao'];

    public function projeto() {
        return $this->belongsTo(Projeto::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
