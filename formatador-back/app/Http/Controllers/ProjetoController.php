<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projeto;
use App\Models\Modelo;

class ProjetoController extends Controller
{

    /* ---- API MÉTODOS ----*/

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projetos = Projeto::where('user_id', 1)->get();
        return $projetos;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'nome' => 'required|string|max:255',
            'descricao' => 'nullable|string|max:300',
        ]);

        $id_usuario = $request->input('user_id');
        if (!$request->input('user_id')) {
            $id_usuario = auth()->id();
        }

        $projeto = Projeto::create([
            'nome' => $request->input('nome'),
            'descricao' => $request->input('descricao'),
            'user_id' => $id_usuario,
        ]);

        return response(
            ['location' => route('projetos.show', $projeto->id)],
            201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Projeto  $projeto
     * @return \Illuminate\Http\Response
     */
    public function show(Projeto $projeto)
    {
        return $projeto;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Projeto  $projeto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Projeto $projeto)
    {
        // $request->validate([
        //     'nome' => 'required|string|max:255',
        //     'descricao' => 'nullable|string|max:300',
        // ]);

        $nome = $request->input('nome');
        if($nome) {
            $projeto->nome = $nome;
        }

        $descricao = $request->input('descricao');
        if($descricao) {
            $projeto->descricao = $descricao;
        }
        
        $projeto->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\projeto  $projeto
     * @return \Illuminate\Http\Response
     */
    public function destroy(projeto $projeto)
    {
        $projeto->delete();
    }

    /*---- TEMPLATE/TESTE MÉTODOS ----*/
    public function indexView() {
        $projetos = Projeto::where('user_id', auth()->id())->get();
        return view('projetos.index', ['projetos' => $projetos]);
    }

    public function createView() {
        return view('projetos.create');
    }

    public function storeView(Request $request) {
        
        $request->validate([
            'nome' => 'required|string|max:255',
            'descricao' => 'nullable|string|max:300'
        ]);

        $projeto = Projeto::create([
            'nome' => $request->input('nome'),
            'descricao' => $request->input('descricao'),
            'user_id' => auth()->id()
        ]);

        return redirect()->route('projetos.index');
    }

    public function showView(Projeto $projeto) {
        $modelos = Modelo::where('user_id', auth()->id())->orWhereNull('user_id')->get();
        return view('projetos.show', ['projeto' => $projeto, 'modelos' => $modelos]);
    }

    public function editView(Projeto $projeto) {
        return view('projetos.edit', ['projeto' => $projeto]);
    }

    public function updateView(Request $request, Projeto $projeto) {
        $request->validate([
            'nome' => 'required|string|max:255',
            'descricao' => 'nullable|string|max:300',
        ]);

        $projeto->nome = $request->input('nome');
        $projeto->descricao = $request->input('descricao');
        $projeto->save();

        return redirect()->route('projetos.index');
    }

    public function destroyView(Projeto $projeto) {
        $projeto->delete();
        return redirect()->route('projetos.index');
    }


}
