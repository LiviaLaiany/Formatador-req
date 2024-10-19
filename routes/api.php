<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjetoController;
use App\Http\Controllers\ModeloController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    Route::apiResource('projetos', ProjetoController::class);
    Route::apiResource('modelos', ModeloController::class);
    return $request->user();
});


