@extends('layouts.app')

@section('content')
    <h1>Editar Projeto</h1>

    <form action="{{ route('projetos.update', $projeto->id) }}" method="POST">
        @csrf
        @method('PUT')

        <label for="nome">Nome do Projeto:</label>
        <input type="text" name="nome" value="{{ $projeto->nome }}" required><br><br>

        <label for="descricao">Descrição:</label>
        <textarea name="descricao" rows="5">{{ $projeto->descricao }}</textarea><br><br>

        <button type="submit">Atualizar</button>
    </form>

    <a href="{{ route('projetos.index') }}">Voltar para a lista de projetos</a>
@endsection
