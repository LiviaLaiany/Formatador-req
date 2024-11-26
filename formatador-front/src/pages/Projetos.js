import { useEffect, useState } from "react";
import api from './api'

export default function Projetos() {
    const [projetos, setProjetos] = useState()

    useEffect(() => {

        try {
            const response = api.get('/projetos')
            setProjetos(response.data)
        } catch (error) {
            console.error('Erro ao buscar projetos:', error)
        }

    }) 

    return (
        <div>
            <h1>Projetos</h1>
            <ul>
                {projetos.map((projeto) => (
                    <li key="{projeto.id}">{projeto.nome}</li>
                ))}
            </ul>
        </div>
    )
}