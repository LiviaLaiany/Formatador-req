<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documento_requisitos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('pro_id')->constrained(table: 'projetos')->onDelete('cascade');
            $table->foreignId('mod_id')->constrained(table: 'modelos')->onDelete('cascade');
            $table->string('nome');
            $table->json('doc_json')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('documento_requisitos');
    }
};
