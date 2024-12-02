<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjetoController;
use App\Http\Controllers\ModeloController;
use App\Http\Controllers\DocumentoRequisitosController;
use App\Http\Controllers\UserController;

Route::post('register', [UserController::class, 'store'])->name('users.store');
Route::post('login', [UserController::class, 'login'])->name('users.login');


Route::group(['prefix' => 'v1', 'middleware' => 'jwt.verify'],function () {

    Route::post('logout', [UserController::class, 'logout'])->name('users.logout');
    Route::post('users/{id}', [UserController::class, 'show'])->name('users.show');

    Route::apiResource('projetos', ProjetoController::class);
    Route::apiResource('modelos', ModeloController::class);
    Route::apiResource('documentos', DocumentoRequisitosController::class);
});


// Route::apiResource('users', UserController::class);


