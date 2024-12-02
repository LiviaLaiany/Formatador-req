@extends('layouts.app')

@section('content')
    <h1 class="text-center font-bold">Criar Documento de Requisitos</h1>

    <form action="{{ route('documentos.store') }}" method="POST" enctype="multipart/form-data">
        @csrf

        <input type="hidden" name="pro_id" value="{{ $projeto->id }}">
        <input type="hidden" name="mod_id" value="{{ $modelo->id }}">
        <br>
        <
        <div class="text-center">
            <label for="nome">Nome do Documento:</label><br>
            <input type="text" name="nome" required>
        </div>
        <br>
        
        <h2 class="font-bold mt-4 text-center">Capa</h2>
        <br>
        @if(isset($modelo->mod_json['capa']))
            @foreach($modelo->mod_json['capa'] as $campo)
                <div class="text-center">
                    <label>{{ $campo['titulo'] }}:</label>
                    @if($campo['tipo'] === 'campo_texto')
                        <input type="text" name="capa[{{ $campo['titulo'] }}]" @if($campo['obrigatorio']) required @endif>
                        <br>
                    @elseif($campo['tipo'] === 'arquivo')
                        <input type="file" name="capa[{{ $campo['titulo'] }}]" @if($campo['obrigatorio']) required @endif>
                        <br>
                    @endif
                    @if(isset($campo['descricao']))
                        <p class="text-sm text-gray-500">{{ $campo['descricao'] }}</p>
                        <br>
                    @endif
                </div>
            @endforeach
        @endif
        <br>

        <h2 class="font-bold mt-4 text-center">Conteúdo</h2>
        <br>
        @if(isset($modelo->mod_json['conteudo']))
            @foreach($modelo->mod_json['conteudo'] as $secao)
                <div class="text-center">
                    <h3 class="font-bold">{{ $secao['titulo'] }}</h3>
                    <br>
                    @if(isset($secao['texto-secao']))
                        <label>{{ $secao['texto-secao']['descricao'] ?? 'Texto da Seção' }}:</label>
                        <input name="conteudo[{{ $secao['titulo'] }}][texto-secao]" @if($secao['texto-secao']['obrigatorio']) required @endif></input>
                        <br>
                    @endif
                    @if(isset($secao['componentes']))
                        @foreach($secao['componentes'] as $componente)
                            <div>
                                <label>{{ $componente['titulo'] }}:</label>
                                @if($componente['tipo'] === 'campo_texto')
                                    <input type="text" name="conteudo[{{ $secao['titulo'] }}][{{ $componente['titulo'] }}]" @if($componente['obrigatorio']) required @endif>
                                    <br>
                                @elseif($componente['tipo'] === 'arquivo')
                                    <input type="file" name="conteudo[{{ $secao['titulo'] }}][{{ $componente['titulo'] }}]" @if($componente['obrigatorio']) required @endif>
                                    <br>
                                @endif
                                @if(isset($componente['descricao']))
                                    <p class="text-sm text-gray-500">{{ $componente['descricao'] }}</p>
                                    <br> 
                                @endif
                            </div>
                        @endforeach
                    @endif
                </div>
            @endforeach
        @endif

        
        <div class="mt-4">
            <x-primary-button type="submit">Criar Documento</x-primary-button>
        </div>
    </form>
@endsection
