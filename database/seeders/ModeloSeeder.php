<?php

namespace Database\Seeders;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModeloSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $json = [
            'capa' => [
                [
                    'tipo' => 'campo_texto',
                    'titulo' => 'Instituição',
                    'obrigatorio' => true
                ],
                [
                    'tipo' => 'campo_texto',
                    'titulo' => 'Título Projeto',
                    'obrigatorio' => true
                ],
                [
                    'tipo' => 'campo_texto',
                    'titulo' => 'Autores',
                    'obrigatorio' => true
                ],
                [
                    'tipo' => 'campo_texto',
                    'titulo' => 'Data/Localização',
                    'obrigatorio' => true
                ]
            ],
            'conteudo' =>  [
                [
                    'tipo' => 'secao',
                    'titulo' => 'Introdução',
                    'obrigatorio' => true,
                    'componentes' => [
                        [
                            'tipo' => 'campo_texto',
                            'titulo' => 'Objetivo Geral',
                            'obrigatorio' => true
                        ],
                        [
                            'tipo' => 'campo_texto',
                            'titulo' => 'Objetivos Específicos',
                            'obrigatorio' => true
                        ]
                    ]
                ],
                [
                    'tipo' => 'lista',
                    'titulo' => 'Requisitos Funcionais',
                    'obrigatorio' => true
                ],
                [
                    'tipo' => 'lista',
                    'titulo' => 'Requisitos Não Funcionais',
                    'obrigatorio' => true
                ],
                [
                    'tipo' => 'secao',
                    'titulo' => 'Anexos',
                    'obrigatorio' => false,
                    'componentes' => [
                        [
                            'tipo' => 'campo_texto',
                            'titulo' => 'Descrição',
                            'obrigatorio' => false
                        ],
                        [
                            'tipo' => 'arquivo',
                            'titulo' => 'Arquivo anexo',
                            'obrigatorio' => false
                        ]
                    ]
                ],
                [
                    'tipo' => 'campo_texto',
                    'titulo' => 'Referências',
                    'obrigatorio' => true
                ]
            ]
        ];

        $json = json_encode($json, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

        DB::table('modelos')->insert([
            'nome' => 'Modelo Base de Documento de Requisitos',
            'mod_json' => $json,
            'user_id' => NULL
        ]);
    }
}