import './FormNetflix.css';
import { useState } from 'react';

function FormNetflix() {

    const [formData, setFormData] = useState({
        nome: '',
        classificacao: '',
        genero: '',
    });

    // Função para lidar com a mudança nos campos de entrada
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Envia os dados do formulário para o servidor
        //console.log(JSON.stringify(formData));
        fetch("http://localhost:3000/novo/produto", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar formulário');
                }
                // Trate a resposta do servidor conforme necessário
                console.log('Formulário enviado com sucesso');
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    };

    return (
        <>
            <h2>Cadastro de Produto</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        placeholder='Nome'
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        placeholder='Classificacao'
                        type="number"
                        name="classificacao"
                        value={formData.preco}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <input
                        placeholder='Gênero'
                        type="text"
                        name="genero"
                        value={formData.categoria}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}

export default FormNetflix;