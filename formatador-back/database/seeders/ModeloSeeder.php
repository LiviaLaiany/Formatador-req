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
                    'obrigatorio' => true,
                    'descricao' => 'Nome da instituição responsável pelo projeto.'
                ],
                [
                    'tipo' => 'campo_texto',
                    'titulo' => 'Título Projeto',
                    'obrigatorio' => true,
                    'descricao' => 'Título oficial do projeto que será descrito no documento.'
                ],
                [
                    'tipo' => 'campo_texto',
                    'titulo' => 'Autores',
                    'obrigatorio' => true,
                    'descricao' => 'Nomes dos autores responsáveis pelo documento.'
                ],
                [
                    'tipo' => 'campo_texto',
                    'titulo' => 'Data/Localização',
                    'obrigatorio' => true,
                    'descricao' => 'Data e local de elaboração do documento.'
                ]
            ],
            'conteudo' =>  [
                [
                    'tipo' => 'secao',
                    'titulo' => 'Introdução',
                    'obrigatorio' => true,
                    'texto-secao' => [
                        'tipo' => 'campo_texto',
                        'obrigatorio' => false,
                        'descricao' => 'Texto que aparece logo após o título da introdução, explicando o contexto inicial do projeto.'
                    ],
                    'componentes' => [
                        [
                            'tipo' => 'campo_texto',
                            'titulo' => 'Objetivo Geral',
                            'obrigatorio' => true,
                            'descricao' => 'Descrição do principal objetivo do projeto.'
                        ],
                        [
                            'tipo' => 'lista',
                            'titulo' => 'Objetivos Específicos',
                            'obrigatorio' => true,
                            'descricao' => 'Lista dos objetivos específicos a serem alcançados no projeto.'
                        ],
                        [
                            'tipo' => 'campo_texto',
                            'titulo' => 'Escopo',
                            'obrigatorio' => true,
                            'descricao' => 'Descrição dos limites do projeto e orientação para a equipe sobre o que será incluido ou não no projeto.'
                        ],
                        [
                            'tipo' => 'campo_texto',
                            'titulo' => 'Visão Geral',
                            'obrigatorio' => true,
                            'descricao' => 'Define as bases do projeto e orienta os leitores para que entendam o contexto do desenvolvimento.'
                        ],
                        [
                            'tipo' => 'tabela',
                            'titulo' => 'Termos e Definições',
                            'obrigatorio' => false,
                            'descricao' => 'Lista dos termos citados no documento e suas respectivas definições.',
                            'colunas' => ['Termo', 'Explicação'],
                            'linhas' => []
                        ]
                        
                    ]
                ],
                [
                    'tipo' => 'campo_texto',
                    'titulo' => 'Descrição Geral',
                    'obrigatorio' => false,
                    'descricao' => 'Descrição Geral do projeto.',
                    'componentes' => [
                         [
                            'tipo' => 'campo_texto',
                            'titulo' => 'Análise de Público-Alvo',
                            'obrigatorio' => false,
                            'descricao' => 'Texto com análise do público-alvo.',
                        ],
                    ]
                ],
                [
                    'tipo' => 'tabela',
                    'titulo' => 'Requisitos Funcionais',
                    'obrigatorio' => true,
                    'descricao' => 'Funcionalidades essenciais do sistema.',
                    'colunas' => ['ID', 'Descrição', 'Prioridade'],
                    'linhas' => []
                ],
                [
                    'tipo' => 'tabela',
                    'titulo' => 'Requisitos Não Funcionais',
                    'obrigatorio' => true,
                    'descricao' => 'Especificações técnicas que o sistema deve cumprir.',
                    'colunas' => ['ID', 'Descrição', 'Prioridade'],
                    'linhas' => []
                ],
                [
                    'tipo' => 'arquivo',
                    'titulo' => 'Diagrama de Caso de Uso',
                    'obrigatorio' => false,
                    'descricao' => 'Imagem do Diagrama de Caso de Uso.'
                ],
                [
                    'tipo' => 'secao',
                    'titulo' => 'Anexos',
                    'obrigatorio' => false,
                    'texto-secao' => [
                        'tipo' => 'campo_texto',
                        'obrigatorio' => false,
                        'descricao' => 'Texto explicando o que pode ser anexado ao documento.'
                    ],
                    'componentes' => [
                        [
                            'tipo' => 'campo_texto',
                            'titulo' => 'Descrição',
                            'obrigatorio' => false,
                            'descricao' => 'Breve descrição do conteúdo do anexo.'
                        ],
                        [
                            'tipo' => 'arquivo',
                            'titulo' => 'Arquivo anexo',
                            'obrigatorio' => false,
                            'descricao' => 'Arquivo anexado ao documento.'
                        ]
                    ]
                ],
                [
                    'tipo' => 'campo_texto',
                    'titulo' => 'Referências',
                    'obrigatorio' => true,
                    'descricao' => 'Lista de fontes e referências utilizadas no documento.'
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
