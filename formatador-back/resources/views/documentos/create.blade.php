@extends('layouts.app')

@section('content')
    <h1 class="text-center font-bold">Criar Documento de Requisitos</h1>

    <form action="{{ route('documentos.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <input type="hidden" name="pro_id" value="{{ $projeto->id }}">
        <input type="hidden" name="mod_id" value="{{ $modelo->id }}">

        <label for="nome">Nome do Documento:</label>
        <input type="text" name="nome" required>

        <x-primary-button type="submit">Criar Documento</x-primary-button>
    </form>
@endsection
