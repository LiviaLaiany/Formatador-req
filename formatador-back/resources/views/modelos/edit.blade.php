@extends('layouts.app')

@section('content')
    <br>
    <h1 class="text-center text-xl"><b>Editar Modelo Personalizado: {{ $modelo->nome }}</b></h1>

    <form action="{{ route('modelos.update', $modelo->id) }}" method="POST">
        @csrf
        @method('PUT') 
        <br>
        <div class="text-center">
            <label for="nome">Nome do modelo personalizado:</label><br>
            <input type="text" name="nome" value="{{ old('nome', $modelo->nome) }}" required><br><br>
        </div>

        <!-- Capa -->
        <h3 class="text-center font-medium text-lg">Capa</h3><br>
        <div class="text-center">
            @foreach ($capaPadrao as $campo)
                @php
                    $array = [
                        'titulo' => $campo['titulo'],
                        'tipo' => $campo['tipo'],
                        'obrigatorio' => $campo['obrigatorio'],
                        'descricao' => $campo['descricao']
                    ];
                    
                    $selecionado = false;
                    foreach ($modelo->mod_json['capa'] as $campoSelecionado) {
                        if ($campoSelecionado['titulo'] === $campo['titulo']) {
                            $selecionado = true;
                            break;
                        }
                    }
                @endphp
                <div class="campo">
                    <input 
                        type="checkbox" 
                        name="capa[]" 
                        value="{{ json_encode($array, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) }}"
                        @if ($selecionado) checked @endif
                        @if ($campo['obrigatorio']) readonly @endif
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
        <div class="text-center">
            @foreach ($conteudoPadrao as $campo)
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

                    $selecionado = false;
                    foreach ($modelo->mod_json['conteudo'] as $campoSelecionado) {
                        if ($campoSelecionado['titulo'] === $campo['titulo']) {
                            $selecionado = true;
                            break;
                        }
                    }
                @endphp

                <div>
                    <input 
                        type="checkbox" 
                        name="conteudo[]" 
                        value="{{ json_encode($array, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) }}"
                        @if ($selecionado) checked @endif
                        @if ($campo['obrigatorio']) readonly @endif
                    >
                    <strong>{{ $campo['titulo'] }}</strong><br>

                    @if (isset($campo['texto-secao']))
                        {{$campo['texto-secao']['descricao']}}
                    @else
                        @if (isset($campo['descricao']))
                            {{$campo['descricao']}}
                        @endif
                    @endif
                </div>
            @endforeach
        </div>

        <br>
        <div class="text-center">
            <x-primary-button type="submit" class="btn btn-primary">Atualizar</x-primary-button>
        </div>
        <br>
    </form>

    <a href="{{ route('modelos.index') }}">Voltar para a lista de modelos</a>
@endsection
