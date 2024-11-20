@extends('layouts.app')

@section('content')
    <br>
    <h1 class="text-center text-xl"><b>Criar Novo Modelo Personalizado</b></h1>

    <form action="{{ route('modelos.store') }}" method="POST">
        @csrf
        <br>
        <div class="text-center">
            <label for="nome">Nome do modelo personalizado:</label><br>
            <input type="text" name="nome" required><br><br>
        </div>

        <!-- Capa -->
        <h3 class="text-center font-medium text-lg">Capa</h3><br>
        <div class="text-center">
            @foreach ($capa as $campo)
                @php
                $array = [
                    'titulo' => $campo['titulo'],
                    'tipo' => $campo['tipo'],
                    'obrigatorio' => $campo['obrigatorio'],
                    'descricao' => $campo['descricao']
                ];
                @endphp
                <div class="campo">
                    <input 
                        type="checkbox" 
                        name="capa[]" 
                        value="{{ json_encode($array, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) }}"

                        @if ($campo['obrigatorio'])
                            checked hidden
                        @endif
                    >
                    <strong>{{ $campo['titulo'] }}</strong>
                    <p>
                    @if (isset($campo['descricao']))
                        {{$campo['descricao']}}</p>
                    @else
                        Sem descrição disponível
                    @endif
                </div>
            @endforeach
        </div>
        <br>
        <!-- Conteúdo -->
        <h3 class="text-center font-medium text-lg">Conteúdo</h3><br>
        @foreach ($conteudo as $campo)
            @php
                $array = [
                    'titulo' => $campo['titulo'],
                    'tipo' => $campo['tipo'],
                    'obrigatorio' => $campo['obrigatorio']
                ];

                
                if(isset($campo['descricao'])) {
                    $array['descricao'] = $campo['descricao'];
                } else if(isset($campo['texto-secao'])) {
                    $array['texto-secao'] = $campo['texto-secao'];
                    $array['componentes'] = $campo['componentes'];
                }
            @endphp

            <div class="text-center">
                <input 
                    type="checkbox" 
                    name="conteudo[]" 
                    value="{{ json_encode($array, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)}}"
                    @if ($campo['obrigatorio'])
                        checked hidden
                    @endif
                >
                <strong>{{ $campo['titulo'] }}</strong><br>

                @if (isset($campo['texto-secao']))
                    {{$campo['texto-secao']['descricao']}}
                @else
                    @if(isset($campo['descricao']))
                        {{$campo['descricao']}}
                    @endif
                @endif
            </div>
        @endforeach

        <br>
        <div class="text-center">
            <x-primary-button type="submit" class="btn btn-primary">Salvar</x-primary-button>
        </div>
        <br>
    </form>

    <a href="{{ route('modelos.index') }}">Voltar para a lista de modelos</a>
@endsection
