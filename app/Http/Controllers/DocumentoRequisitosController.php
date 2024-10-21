<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projeto;
use App\Models\Modelo;
use App\Models\DocumentoRequisitos;

class DocumentoRequisitosController extends Controller
{
    
    /* ---- API MÉTODOS ----*/

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $projeto = Projeto::where('id', $pro_id)->firstOrFail();

        // $documentos = DocumentoRequisitos::where('pro_id', $projeto->id)->get();

        $documentos = DocumentoRequisitos::all();

        return $documentos;
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
            'pro_id' => 'required|exists:projetos,id',
            'mod_id' => 'required|exists:modelos,id',
            'doc_json' => 'required'
        ]);

        $projeto = Projeto::findOrFail($request->input('pro_id'));
        if($projeto->documentoRequisitos) {
            return response()->json(['error' => 'Esse projeto já possui um documento de requisitos']);
        }

        $documento = DocumentoRequisitos::create([
            'nome' => $request->input('nome'),
            'pro_id' => $request->input('pro_id'),
            'mod_id' => $request->input('mod_id'),
            'doc_json' => $request->input('doc_json'),
        ]);

        return response(
            ['location' => route('documentos.show', $documento->id)],
            201
        );;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DocumentoRequisitos  $documento
     * @return \Illuminate\Http\Response
     */
    public function show(DocumentoRequisitos $documento)
    {
        return $documento;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DocumentoRequisitos  $documento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DocumentoRequisitos $documento)
    {
        // $request->validate([
        //     'nome' => 'required|string|max:255',
        //     'doc_json' => 'json'
        // ]);

        $nome = $request->input('nome');
        if ($nome) {
            $documento->nome = $nome;
        }

        $doc_json = $request->input('doc_json');
        if($doc_json) {
            $documento->doc_json = $doc_json;
        }

        $documento->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DocumentoRequisitos  $documento
     * @return \Illuminate\Http\Response
     */
    public function destroy(DocumentoRequisitos $documento)
    {
        $documento->delete();
    }


    /*---- TEMPLATE/TESTE MÉTODOS ----*/

    //Essa função não faz sentido ter, já que o documento de requisitos aparece na aba do projeto que ele está contido
    // public function indexView() {
    //     $projetos = Projeto::where('user_id', auth()->id())->get();

    //     $ids = [];

    //     foreach ($projetos as $projeto) {
    //         $ids[] = $projeto->id;
    //     }

    //     $documentos = [];

    //     foreach ($ids as $projeto) {
    //         $documentos[] = DocumentosRequisitos::where('pro_id', $projeto)->first();
    //     }

    //     return view('documentos.index', ['documentos' => $documentos]);
    // }

    public function createComModeloView(Request $request) {

        $request->validate([
            'pro_id' => 'required|exists:projetos,id',
            'mod_id' => 'required|exists:modelos,id'
        ]);

        $projeto = Projeto::where('id', $request->input('pro_id'))->where('user_id', auth()->id())->first();
        $modelo = Modelo::where('id', $request->input('mod_id'))->where('user_id', auth()->id())->first();

        if ($projeto->documentoRequisitos) {
            return redirect()->routes('projetos.showView', $projeto->id);
        }

        return view('documentos.create', ['projeto' => $projeto, 'modelo' => $modelo]);
    }

    public function storeView(Request $request) {
        $request->validate([
            'nome' => 'required|string|max:255',
            'pro_id' => 'required|exists:projetos,id',
            'mod_id' => 'required|exists:modelos,id',
            'doc_json' => 'required|json',
        ]);

        DocumentoRequisitos::create([
            'nome' => $request->input('nome'),
            'pro_id' => $request->input('pro_id'),
            'mod_id' => $request->input('mod_id'),
            'doc_json' => $request->input('doc_json')
        ]);

        return redirect()->route('documentos.index');
    }

    public function showView(DocumentoRequisitos $documento) {
        
        if ($documento->projeto->user_id !== auth()->id()) {
            abort(403, 'Acesso não autorizado.');
        }

        return view('documento.show', ['documento' => $documento]);
    }

    public function editView(DocumentoRequisitos $documento) {
        
        if ($documento->projeto->user_id !== auth()->id()) {
            abort(403, 'Acesso não autorizado.');
        }

        $modelos = Modelo::all();
        return view('documentos.edit', ['documento' => $documento, 'modelos' => $modelos]);
    }

    public function updateView(Request $request, DocumentoRequisitos $documento) {
        
        $request->validate([
            'nome' => 'required|string|max:255',
            'mod_id' => 'required|exists:modelos,id',
            'doc_json' => 'required|json'
        ]);

        if ($documento->projeto->user_id !== auth()->id()) {
            abort(403, 'Acesso não autorizado.');
        }

        $documento->nome = $request->input('nome');
        $documento->mod_id = $request->input('mod_id');
        $documento->doc_json = $request->input('doc_json');

        return redirect()->route('documentos.index');
    }

    public function destroyView(DocumentoRequisitos $documento) {

        if ($documento->projeto->user_id !== auth()->id()) {
            abort(403, 'Acesso não autorizado.');
        }

        $documento->delete();
        return redirect()->route('documentos.index');
    }

}
