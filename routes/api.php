<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjetoController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    Route::apiResource('projetos', ProjetoController::class);
    return $request->user();
});


