# dev-cinemapp

## Configuração incial

Para a instalação dos pacotes execute o seguinte comando:

- yarn

### Execução local

Para executar o App em modo de devel, execute o seguinte comando:

- yarn dev

### Gerando a apk de instalção

Caso queira gerar uma apk de debug para testar o app fora do ambiente de devel, execute o seguinte comando:

- yarn build-android

## Premissas de funcionamento

### BUSCA DE OBRAS (FILMES, SÉRIES, JOGOS E ETC)

Na aba de busca deverá ser possível realizar as seguintes ações:

- Buscar as obras desejadas;
- Adicionar a obra aos favoritos;
- Retirar a obras dos favoritos;
- Paginação conforme informação retornada pela API;
- Aviso simples de erro, caso ocorra algum erro nas requisições.

Obs:

- Ao adicionar uma obra aos favoritos a mesma ficará destacada, facilitando a identificação das obras já adicionadas aos favoritos.
- Não deverá ser possível a adição da mesma obra como favorito de forma duplicada.

### FAVORITOS (FILMES, SÉRIES, JOGOS E ETC)

Na aba de favoritos deverá ser possível realizar as seguintes ações:

- visualizar as obras adicionadas aos favoritos;
- Retirar uma ou mais obras dos favoritos;

### GERAIS

- A movimentação entre as abas poderá ser feita através de gestos, sem a obrigatóriedade do 'click' na opção.
- Para a construção do Layout e da arquitetura de comunicação, utilizou-se de um boilerPlate particular.
- A orientação está fixa na horizontal;
- Não foi realizado testes com ios, devido a falta do equipamento no local, caso seja um requisito de funcionamento, o mesmo poderá encontrar inconfirmadades de funcionamento.
