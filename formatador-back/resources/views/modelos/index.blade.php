@extends('layouts.app')

@section('content')
    <br>
    <h1 class="text-center"><b>Modelos</b></h1><br>

    <div class="text-center">
        <a href="{{ route('modelos.create') }}">
            <x-primary-button class="ml-3 mr-3">
                Criar novo Modelo Personalizado
            </x-primary-button>
        </a>
        
    </div><br>

    <h2 class="text-center">Modelos Personalizados</h2>
    <ul class="text-center">
        @foreach ($modelos as $modelo)
            @if ($modelo->user_id === auth()->id())
                <li>
                    <a href="{{ route('modelos.show', $modelo->id) }}">{{ $modelo->nome }}</a>
                    <a href="{{ route('modelos.edit', $modelo->id) }}">
                        <x-secondary-button>Editar</x-secondary-button><br>
                    </a>
                    <form action="{{ route('modelos.destroy', $modelo->id) }}" method="POST" style="display:inline;">
                        @csrf
                        @method('DELETE')
                        <button type="submit">
                            <x-secondary-button type="submit">Deletar</x-secondary-button>
                        </button>
                    </form>
                </li>
            @endif
        @endforeach
    </ul>
    <br>
    <h2 class="text-center">Modelos Base</h2><br>
    @foreach ($modelos as $modelo)
        @if ($modelo->user_id === null)
            <div class="text-center">
                <a href="{{ route('modelos.show', $modelo->id) }}">
                    <x-secondary-button>{{ $modelo->nome }}</x-secondary-button>
                </a>
            </div>
        @endif
    @endforeach
    
@endsection
