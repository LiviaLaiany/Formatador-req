<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use User;
use Artefato;
use DocumentoRequisitos;

class Projeto extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'nome', 'descricao', 'doc_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function artefatos() {
        return $this->hasMany(Artefato::class);
    }

    public function documentoRequisitos() {
        return $this->hasOne(DocumentoRequisitos::class, 'id', 'doc_id');
    }
}
