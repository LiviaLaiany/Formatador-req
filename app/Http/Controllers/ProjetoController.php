<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projeto;

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
        $projetos = Projeto::where('user_id', auth()->id())->get();
        return response()->json($projetos, 200);
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

        $projeto = Projeto::create([
            'nome' => $request->input('nome'),
            'descricao' => $request->input('descricao'),
            'user_id' => auth()->id(),
        ]);

        return response()->json($projeto, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Projeto  $projeto
     * @return \Illuminate\Http\Response
     */
    public function show(Projeto $projeto)
    {
        return response()->json($projeto);
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
        $request->validate([
            'nome' => 'required|string|max:255',
            'descricao' => 'nullable|string|max:300',
        ]);

        $projeto->nome = $request->input('nome');
        $projeto->descricao = $request->input('descricao');

        return response()->json($projeto, 200);
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
        return response()->json(['message' => 'Projeto deletado com sucesso'], 200);
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

        return redirect()->route('projetos.indexView');
    }

    public function showView(Projeto $projeto) {
        return view('projetos.show', ['projeto' => $projeto]);
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

        return redirect()->route('projetos.indexView');
    }

    public function destroyView(Projeto $projeto) {
        $projeto->delete();
        return redirect()->route('projetos.indexView');
    }


}
