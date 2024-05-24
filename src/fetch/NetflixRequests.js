/**
 * Classe responsável por fazer as requisições para o servidor
 */
class NetflixRequests {

    /**
     * Construtor para instanciar os parâmetros do servidor
     */
    constructor() {
        this.serverUrl = 'http://10.90.2.119:3333';           // endereço do servidor back-end
        this.routeListaFilmes = '/titulos';           // rota do servidor back-end
        // this.routeCadastrarFilme = '/novotitulo';        // rota do servidor back-end
        // this.routeAtualizarFilme = '/atualizartitulo';    // rota do servidor back-end
        // this.routeRemoverFilme = '/removertitulo';        // rota do servidor back-end
    }

    /**
     * Busca os filmes cadastrados no servidor
     * 
     * @returns Array com os filmes cadastrados
     */
    async buscarTitulos() {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeListaFilmes}`);
            // Verifica se a resposta não foi bem sucedida...
            if (!response.ok) {
                // ...lança um erro
                throw new Error('Erro ao buscar servidor');
            }
            // retorna a lista dos filmes no formato json a quem chamou a função
            return await response.json();
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            return null;
        }
    }

    /**
     * Cadastra um filme no servidor
     * 
     * @param {*} filme Objeto com as informações do filme
     * @returns **verdadeiro (true)** caso o cadastro tenho sido feito com sucesso, **null (nulo)** caso tenha ocorrido algum erro
     */
    // async cadastrarFilme(filme) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
    //         const response = await fetch(`${this.serverUrl}${this.routeCadastrarfilme}`, {
    //             // Informa o verbo a ser acessado
    //             method: 'POST',
    //             // informa os cabeçalhos da requisição
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             // informa o corpo da requisição, contendo as informações do filme
    //             body: JSON.stringify(filme)
    //         });
    //         // Verifica se a resposta não foi bem sucedida ...
    //         if (!response.ok) {
    //             // ... lança um erro
    //             throw new Error('Erro ao enviar formulário');
    //         }
    //         // retorna true caso a resposta seja bem sucedida
    //         return true;
    //     } catch (error) {
    //         // caso ocorra algum erro na comunicação
    //         console.error('Erro: ', error);
    //         window.alert('Erro ao cadastrar filme');
    //         return null;
    //     }
    // }

    /**
     * Deleta um filme do servidor
     * 
     * @param {*} idFilme ID do filme a ser deletado
     * @returns **verdadeiro (true)** caso o filme tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    // async deletarFilme(idFilme) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do filme
    //         const response = await fetch(`${this.serverUrl}${this.routeRemoverFilme}?idFilme=${idFilme}`, {
    //             // Informa o verbo a ser acessado
    //             method: 'DELETE'
    //         });
    //         // Verifica se a resposta não foi bem sucedida ...
    //         if (!response.ok) {
    //             // ... lança um erro
    //             throw new Error('Erro ao enviar formulário');
    //         }
    //         // retorna true caso a resposta seja bem sucedida
    //         return true;
    //     } catch (error) {
    //         // caso ocorra algum erro na comunicação
    //         console.error('Erro: ', error);
    //         window.alert('Erro ao cadastrar filme/série');
    //         return null;
    //     }
    // }

    /**
     * Atualiza o registro de um filme no servidor
     * 
     * @param {*} Filmes Objeto com as informações do filme
     * @returns **verdadeiro (true)** caso o filme tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */

    
}

export default new NetflixRequests;