<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\ProjetoController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // ---- CRUD PROJETOS ----

    //CREATE
    Route::get('/projetos/create', [ProjetoController::class, 'createView'])->name('projetos.createView');
    Route::post('/projetos', [ProjetoController::class, 'storeView'])->name('projetos.storeView');

    //READ
    Route::get('/projetos', [ProjetoController::class, 'indexView'])->name('projetos.indexView');
    Route::get('/projetos/{projeto}', [ProjetoController::class, 'showView'])->name('projetos.showView');

    //UPDATE
    Route::get('/projetos/{projeto}/edit', [ProjetoController::class, 'editView'])->name('projetos.editView');
    Route::put('/projetos/{projeto}', [ProjetoController::class, 'updateView'])->name('projetos.updateView');
    
    //DELETE
    Route::delete('/projetos/{projeto}', [ProjetoController::class, 'destroyView'])->name('projetos.destroyView');
});

require __DIR__.'/auth.php';

Route::get('/auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);