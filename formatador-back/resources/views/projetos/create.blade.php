@extends('layouts.app')

@section('content')
    <h1 class="text-center"><b>Criar novo projeto</b></h1>
    <br>
    <div class="text-center">
        <form action="{{ route('projetos.storeView') }}" method="POST">
            @csrf
            <label for="nome">Nome do Projeto:</label><br>
            <input type="text" name="nome" required><br>
            <br>
            <label for="descricao">Descrição:</label><br>
            <textarea name="descricao"></textarea><br>

            <x-primary-button type="submit">Salvar</x-primary-button>
        </form>
    </div>
@endsection
