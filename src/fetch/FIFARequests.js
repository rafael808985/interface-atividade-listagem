/**
 * Classe responsável por fazer as requisições para o servidor
 */
class FIFARequests {

    /**
     * Construtor para instanciar os parâmetros do servidor
     */
    constructor() {
        this.serverUrl = 'http://10.90.2.119:3333';           // endereço do servidor back-end
        this.routeListaCards = '/playercards';           // rota do servidor back-end
        // this.routeCadastrarcards = '/novocard';        // rota do servidor back-end
        // this.routeAtualizarcards = '/atualizarcard';    // rota do servidor back-end
        // this.routeRemovercards = '/removercard';        // rota do servidor back-end
    }

    /**
     * Busca os Cards cadastrados no servidor
     * 
     * @returns Array com os Cards cadastrados
     */
    async buscarCards() {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeListaCards}`);
            // Verifica se a resposta não foi bem sucedida...
            if (!response.ok) {
                // ...lança um erro
                throw new Error('Erro ao buscar servidor');
            }
            // retorna a lista dos Cards no formato json a quem chamou a função
            return await response.json();
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            return null;
        }
    }

    /**
     * Cadastra um cards no servidor
     * 
     * @param {*} cards Objeto com as informações do cards
     * @returns **verdadeiro (true)** caso o cadastro tenho sido feito com sucesso, **null (nulo)** caso tenha ocorrido algum erro
     */
    // async cadastrarCards(cards) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
    //         const response = await fetch(`${this.serverUrl}${this.routeCadastrarCards}`, {
    //             // Informa o verbo a ser acessado
    //             method: 'POST',
    //             // informa os cabeçalhos da requisição
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             // informa o corpo da requisição, contendo as informações do cards
    //             body: JSON.stringify(cards)
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
    //         window.alert('Erro ao cadastrar cards');
    //         return null;
    //     }
    // }

    /**
     * Deleta um cards do servidor
     * 
     * @param {*} idCards ID do cards a ser deletado
     * @returns **verdadeiro (true)** caso o cards tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    // async deletarCards(idCards) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do cards
    //         const response = await fetch(`${this.serverUrl}${this.routeRemoverCards}?idCards=${idCards}`, {
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
    //         window.alert('Erro ao cadastrar Cards');
    //         return null;
    //     }
    // }

    /**
     * Atualiza o registro de um cards no servidor
     * 
     * @param {*} Cards Objeto com as informações do card
     * @returns **verdadeiro (true)** caso o cards tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */

    
}

export default new FIFARequests;