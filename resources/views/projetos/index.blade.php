@extends('layouts.app')

@section('content')
    <br>
    <h1 class="text-center"><b>Projetos</b></h1><br>
    <div class="text-center">
        <x-primary-button class="ml-3 mr-3">
            <a href="{{ route('projetos.createView') }}">Criar novo projeto</a>
        </x-primary-button><br>
    </div>
    <br>
    @foreach ($projetos as $projeto)
    <div class="text-center">
        <p>Projeto {{$projeto->id}}</p>
        <p>Nome: {{ $projeto->nome }}</p>
        <a  href="{{ route('projetos.showView', $projeto->id) }}">
            <x-secondary-button>Ver mais</x-secondary-button><br>
        </a>
        <a href="{{ route('projetos.editView', $projeto->id) }}">
            <x-secondary-button>Editar</x-secondary-button><br>
        </a>
        <form action="{{ route('projetos.destroyView', $projeto->id) }}" method="POST" style="display:inline;">
            @csrf
            @method('DELETE')
            <x-secondary-button type="submit">Deletar</x-secondary-button>
        </form>
    </div>
    @endforeach
    
@endsection