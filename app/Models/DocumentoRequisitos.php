<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Projeto;
use Modelo;

class DocumentoRequisitos extends Model
{
    use HasFactory;

    protected $fillable = ['pro_id', 'mod_id', 'doc_json', 'nome'];

    protected $casts = [
        'doc_json' => 'array'
    ];

    public function projeto() {
        return $this->belongsTo(Projeto::class);
    }

    public function modelo() {
        return $this->belongsTo(Modelo::class);
    }

}
