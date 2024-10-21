<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjetoController;
use App\Http\Controllers\ModeloController;
use App\Http\Controllers\DocumentoRequisitosController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function() {
    Route::apiResource('projetos', ProjetoController::class);
    Route::apiResource('modelos', ModeloController::class);
    Route::apiResource('documentos_requisitos', DocumentoRequisitosController::class);
});


