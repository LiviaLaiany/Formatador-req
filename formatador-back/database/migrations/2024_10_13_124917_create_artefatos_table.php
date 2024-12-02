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
        Schema::create('artefatos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('pro_id')->constrained(table: 'projetos')->onDelete('cascade');
            $table->string('arquivo');
            $table->string('descricao');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('artefatos');
    }
};
