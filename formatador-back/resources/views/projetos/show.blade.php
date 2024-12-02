@extends('layouts.app')

@section('content')
    <br>
    <h1 class="text-center font-bold">Projeto:{{ $projeto->nome }}</h1>
    <p class="text-center">Descrição:{{ $projeto->descricao }}</p>
    <br>
    @if ($projeto->documentoRequisitos)
        <x-secondary-button>
            <a href="{{ route('documentos.show', $projeto->documentoRequisitos->id) }}">
                Ver Documento de Requisitos
            </a>
        </x-secondary-button>
    @else
        <div class="text-center">
            <p>Criar documento de requisitos</p>
            <form action="{{ route('documentos.createComModelo') }}" method="POST">
                @csrf
                <input type="hidden" name="pro_id" value="{{ $projeto->id }}">
                <br>
                <label for="mod_id">Escolha o Modelo do Documento:</label>
                <select name="mod_id" id="mod_id"  required>
                    <option value="" disabled selected>Selecione um modelo</option>
                    @foreach ($modelos as $modelo)
                        <option value="{{ $modelo->id }}">{{ $modelo->nome }}</option>
                    @endforeach
                </select>
                <br>
                <br>
                <x-secondary-button type="submit">
                    Continuar
                </x-secondary-button>
            </form>
        </div>
    @endif
    <br>
    <div class="text-center">
        <a href="{{ route('projetos.index') }}" class="text-center">Voltar para a lista de projetos</a>
    </div>
@endsection
