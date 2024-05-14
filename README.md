# ATVIDADE PRÁTICA - LISTANDO INFORMAÇÕES DO SERVIDOR

## Introdução
Esta atividade tem o objetivo de praticar o que foi feito na última aula, buscando informações de um servidor e exibindo em tabelas e cards.
O servidor possui 3 rotas principais, são elas:
http://10.90.2.119:3333/vendas
http://10.90.2.119:3333/playercards
http://10.90.2.119:3333/titulos

As rotas são refentes a dados reais de uma aplicação, a primeira rota informa os livros best-sellers da Amazon BR, a segunda rota exibe informações de Cartas de Jogadores do jogo FIFA 22 contendo várias informações sobre esses jogadores e a última rota irá exibir uma lista de filmes cadastrados na plataforma Netflix.

O que vocês devem fazer é consumir as informações destas rotas, e exibir as informações de duas maneiras diferentes:
- A primeira é utilizando uma tabela (podendo ser a tag <table> do HTML ou o componente <Table> do React Bootstrap)
- Um card para cada apresentar cada informação recuperada do servidor (Podem usar um card personalizado como fizemos no projeto do Zoológio ou usar um card pronto do Bootstrap)


### Considerações
Vocês devem criar métodos para consumir as rotas;
As informações devem ser exibidas em tabelas e em cards;
Deve ter uma página para exibir a tabela e uma página para exibir os cards;
Vocês devem estilizar as páginas para que as informações estejam apresentáveis (fazer isso apenas depois que as questões já estiverem resolvidas);
Na tabela de Vendas (Amazon), exibir as seguintes informações **(ID do livro, Data da venda, Nome do livro, Edição)**;
Na tabela de Jogadores (FIFA), exibir as seguintes informações **(Player ID, Nome do jogador, Pé dominante, Posição, OVR)**;
Na tabela de Títulos (Netflix), exibir as seguintes informações **(ID do título, Tipo, Título, País, Ano de lançamento)**;
A exibição de itens por página deve ser limitada (1o, 15 ou 20 itens por página);
Verifiquem as informações que as rotas disponibilizam antes de sairem escrevendo código (analisem o problema antes de tentar resolvê-lo);
As datas precisam estar no formato do Brasil, ou seja, no formato DD/MM/AAAA;
No final, versionar e enviar o link do repositório na atividade do classroom;

## Valendo como composição de nota do bimestre (nota de trabalho)

# Prazo de entrega: 15/05/2024 até as 17:00h