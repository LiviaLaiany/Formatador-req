<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Modelo;

class ModeloController extends Controller
{

    /* ---- API MÉTODOS ----*/

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $modelos = Modelo::where('user_id', auth()->id())->orWhereNull('user_id')->get();
        return response()->json($modelos, 200);
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
            'mod_json' => 'required',
            'mod_base_id' => 'required'
        ]);

        $id_usuario = $request->input('user_id');
        if (!$request->input('user_id')) {
            $id_usuario = auth()->id();
        }

        $modeloPersonalizado = Modelo::create([
            'nome' => $request->input('nome'),
            'mod_json' => $request->input('mod_json'),
            'user_id' => $id_usuario,
            'mod_base_id' => $request->input('mod_base_id')
        ]);

        return response(
            ['location' => route('modelos.show', $modeloPersonalizado->id)],
            201
        );;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Modelo  $modelo
     * @return \Illuminate\Http\Response
     */
    public function show(Modelo $modelo)
    {
        return $modelo;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Modelo  $modelo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Modelo $modelo)
    {
        // $request->validate([
        //     'nome' => 'required|string|max:255',
        //     'mod_json' => 'json'
        // ]);

        $nome = $request->input('nome');
        if ($nome) {
            $modelo->nome = $nome;
        }

        $mod_json = $request->input('mod_json');
        if($mod_json) {
            $modelo->mod_json = $mod_json;
        }

        $modelo->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Modelo  $modelo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Modelo $modelo)
    {
        $modelo->delete();

        return response()->json(['message' => 'Modelo excluído com sucesso.'], 200);
    }

    /*---- TEMPLATE/TESTE MÉTODOS ----*/

    public function indexView() {
        $modelos = Modelo::all();
        return view('modelos.index', ['modelos' => $modelos]);
    }

    public function createView() {
        $modelo_base = Modelo::where('user_id', null)->first();
        $capa = $modelo_base->mod_json['capa'];
        $conteudo = $modelo_base->mod_json['conteudo'];
        return view('modelos.create', ['modelo_base' => $modelo_base, 'capa' => $capa, 'conteudo' => $conteudo]);
    }

    public function storeView(Request $request) {
    
        $request->validate([
            'nome' => 'required|string|max:255',
        ]);

        $mod_json = [
            'capa' => [],
            'conteudo' => []
        ];

        foreach ($request->input('capa') as $campo) {
            $mod_json['capa'][] = json_decode($campo, true);
        }

        foreach ($request->input('conteudo') as $campo) {
            $mod_json['conteudo'][] = json_decode($campo, true);
        }

        Modelo::create([
            'nome' => $request->input('nome'), 
            'mod_json' => $mod_json,  
            'user_id' => auth()->id(),  
            'mod_base_id' => 1 
        ]);

        return redirect()->route('modelos.index')->with('success', 'Modelo personalizado criado com sucesso!');
    }

    public function showView(Modelo $modelo) {
        $capa = $modelo->mod_json['capa'];
        $conteudo = $modelo->mod_json['conteudo'];
        return view('modelos.show', ['modelo' => $modelo, 'capa' => $capa, 'conteudo' => $conteudo]);
    }

    public function editView(Modelo $modelo) {
        $modeloBase = Modelo::where('user_id', null)->first();
        $capaPadrao = $modeloBase->mod_json['capa'];
        $conteudoPadrao = $modeloBase->mod_json['conteudo'];

        return view('modelos.edit', ['modelo' => $modelo, 'capaPadrao' => $capaPadrao, 'conteudoPadrao' => $conteudoPadrao]);
    }

    public function updateView(Request $request, Modelo $modelo) {
        $request->validate([
            'nome' => 'required|string|max:255'
        ]);

        $mod_json = [
            'capa' => [],
            'conteudo' => []
        ];

        foreach ($request->input('capa') as $campo) {
            $mod_json['capa'][] = json_decode($campo, true);
        }

        foreach ($request->input('conteudo') as $campo) {
            $mod_json['conteudo'][] = json_decode($campo, true);
        }

        $modelo->nome = $request->input('nome');
        $modelo->mod_json = $mod_json;
        $modelo->save();

        return redirect()->route('modelos.index');
    }

    public function destroyView(Modelo $modelo) {
        $modelo->delete();
        return redirect()->route('modelos.index');
    }

}
