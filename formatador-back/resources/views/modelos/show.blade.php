@extends('layouts.app')

@section('content')
    <h1 class="text-center text-xl"><b>{{ $modelo->nome }}</b></h1><br>

    <h2 class="text-center font-semibold text-lg">Detalhes do Modelo</h2><br>

    <h3 class="text-center font-medium text-lg">Capa</h3><br>
    <div class="text-center">
        @foreach ($capa as $campo)
            <div class="campo">
                <strong>{{ $campo['titulo'] }}:</strong>
                <p>
                @if(isset($secao['texto-secao']['descricao']))
                    {{$campo['texto-secao']['descricao']}}
                @else
                    @if (isset($campo['descricao']))
                        {{ $campo['descricao'] }}
                    @else
                        Sem descrição disponível
                    @endif
                @endif
                </p>
            </div>
        @endforeach
    </div>
    <br>

    <h3 class="text-center font-medium text-lg">Conteúdo</h3><br>
    @foreach ($conteudo as $secao)
        <div class="text-center">
            <strong>{{ $secao['titulo'] }}:</strong>
            <p>

            @if(isset($secao['texto-secao']['descricao']))
                {{$secao['texto-secao']['descricao']}}
            @else
                @if (isset($secao['descricao']))
                    {{ $secao['descricao'] }}
                @else
                    Sem descrição disponível
                @endif
            @endif
            </p> 

            @if (isset($secao['componentes']))
                <div>
                    @foreach ($secao['componentes'] as $componente)
                        <strong>{{ $componente['titulo'] }}:</strong>
                        <p>
                            @if(isset($componente['descricao']))
                            {{$componente['descricao']}}
                            @else
                                Sem descrição disponível
                            @endif       
                        </p>
                    @endforeach
                </div>
            @endif
        </div>
    @endforeach
    <br>
    <div class="text-center">
        <a href="{{ route('modelos.index') }}">
            <x-secondary-button clas="text-center">
                Voltar para a lista de modelos
            </x-secondary-button>
        </a>
    </div>
@endsection
