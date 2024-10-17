@extends('layouts.app')

@section('content')
    <h1>{{ $projeto->nome }}</h1>

    <p>{{ $projeto->descricao }}</p>

    <a href="{{ route('projetos.editView', $projeto->id) }}">Editar</a>
    <form action="{{ route('projetos.destroyView', $projeto->id) }}" method="POST" style="display:inline;">
        @csrf
        @method('DELETE')
        <button type="submit">Deletar</button>
    </form>
    <a href="{{ route('projetos.indexView') }}">Voltar</a>
@endsection
