/**
 * Classe responsável por fazer as requisições para o servidor
 */
class AmazonRequests {

    /**
     * Construtor para instanciar os parâmetros do servidor
     */
    constructor() {
        this.serverUrl = 'http://10.90.2.119:3333';           // endereço do servidor back-end
        this.routeListaProdutos = '/vendas';           // rota do servidor back-end
        // this.routeCadastrarProdutos = '/novoproduto';        // rota do servidor back-end
        // this.routeAtualizarProdutos = '/atualizarproduto';    // rota do servidor back-end
        // this.routeRemoverProdutos = '/removerproduto';        // rota do servidor back-end
    }

    /**
     * Busca os produtos cadastrados no servidor
     * 
     * @returns Array com os produtos cadastrados
     */
    async buscarProdutos() {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeListaProdutos}`);
            // Verifica se a resposta não foi bem sucedida...
            if (!response.ok) {
                // ...lança um erro
                throw new Error('Erro ao buscar servidor');
            }
            // retorna a lista dos produtos no formato json a quem chamou a função
            return await response.json();
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            return null;
        }
    }

    /**
     * Cadastra um Amazon no servidor
     * 
     * @param {*} Produtos Objeto com as informações do Amazon
     * @returns **verdadeiro (true)** caso o cadastro tenho sido feito com sucesso, **null (nulo)** caso tenha ocorrido algum erro
     */
    // async cadastrarProdutos(Produtos) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
    //         const response = await fetch(`${this.serverUrl}${this.routeCadastrarProdutos}`, {
    //             // Informa o verbo a ser acessado
    //             method: 'POST',
    //             // informa os cabeçalhos da requisição
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             // informa o corpo da requisição, contendo as informações do Amazon
    //             body: JSON.stringify(Produtos)
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
    //         window.alert('Erro ao cadastrar Produtos');
    //         return null;
    //     }
    // }

    /**
     * Deleta um Amazon do servidor
     * 
     * @param {*} idProduto ID do Amazon a ser deletado
     * @returns **verdadeiro (true)** caso o Amazon tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    // async deletarProduto(idProduto) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do Amazon
    //         const response = await fetch(`${this.serverUrl}${this.routeRemoverProduto}?idProduto=${idProduto}`, {
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
    //         window.alert('Erro ao cadastrar Produto');
    //         return null;
    //     }
    // }

    /**
     * Atualiza o registro de um Amazon no servidor
     * 
     * @param {*}  Produtos Objeto com as informações do Produto
     * @returns **verdadeiro (true)** caso o Amazon tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */

    
}

export default new AmazonRequests;