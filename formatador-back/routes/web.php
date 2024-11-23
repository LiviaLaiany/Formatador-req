<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\ProjetoController;
use App\Http\Controllers\ModeloController;
use App\Http\Controllers\DocumentoRequisitosController;

Route::get('/', function () {
    return view('welcome');
});


// ---- CRUD PROJETOS ----

    //CREATE
    Route::get('/projetos/create', [ProjetoController::class, 'createView'])->name('projetos.create');
    Route::post('/projetos', [ProjetoController::class, 'storeView'])->name('projetos.store');

    //READ
    Route::get('/projetos', [ProjetoController::class, 'indexView'])->name('projetos.index');
    Route::get('/projetos/{projeto}', [ProjetoController::class, 'showView'])->name('projetos.show');

    //UPDATE
    Route::get('/projetos/{projeto}/edit', [ProjetoController::class, 'editView'])->name('projetos.edit');
    Route::put('/projetos/{projeto}', [ProjetoController::class, 'updateView'])->name('projetos.update');
    
    //DELETE
    Route::delete('/projetos/{projeto}', [ProjetoController::class, 'destroyView'])->name('projetos.destroy');

    // ---- CRUD MODELOS ----

    //CREATE
    Route::get('/modelos/create', [ModeloController::class, 'createView'])->name('modelos.create');
    Route::post('/modelos', [ModeloController::class, 'storeView'])->name('modelos.store');

    //READ
    Route::get('/modelos', [ModeloController::class, 'indexView'])->name('modelos.index');
    Route::get('/modelos/{modelo}', [ModeloController::class, 'showView'])->name('modelos.show');

    //UPDATE
    Route::get('/modelos/{modelo}/edit', [ModeloController::class, 'editView'])->name('modelos.edit');
    Route::put('/modelos/{modelo}', [ModeloController::class, 'updateView'])->name('modelos.update');
    
    //DELETE
    Route::delete('/modelos/{modelo}', [ModeloController::class, 'destroyView'])->name('modelos.destroy');

    // ---- CRUD DOCUMENTOS ---

    //CREATE
    //Avaliar qual rota usar conforme a decisão sobre quando o usuário escolhe o modelo que será utilizado para a construção do formulário, se é na página antes do formulário ou nela em si
    Route::get('documentos/criar/{projeto_id}', [DocumentoRequisitosController::class, 'createView'])->name('documentos.create');
    Route::post('documentos/criar', [DocumentoRequisitosController::class, 'createComModeloView'])->name('documentos.createComModelo');
    Route::post('documentos', [DocumentoRequisitosController::class, 'storeView'])->name('documentos.store');

    //READ
    //Essa função rota faz sentido ter, já que o documento de requisitos aparece na aba do projeto que ele está contido
    // Route::get('documentos', [DocumentoRequisitosController::class, 'indexView'])->name('documentos.index');
    Route::get('documentos/{documento}', [DocumentoRequisitosController::class, 'showView'])->name('documentos.show');

    //UPDATE
    Route::get('documentos/{documento}/editar', [DocumentoRequisitosController::class, 'editView'])->name('documentos.edit');
    Route::put('documentos/{documento}', [DocumentoRequisitosController::class, 'updateView'])->name('documentos.update');

    //DELETE
    Route::delete('documentos/{documento}', [DocumentoRequisitosController::class, 'destroyView'])->name('documentos.destroy');


Route::get('/auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);