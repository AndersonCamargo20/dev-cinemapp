# dev-cinemapp

### Olá amigx,

### Seja bem vindx ao nosso desafio!

Nosso passatempo favorito nessa quarentena tem sido assistir filmes e seriados, por isso pensamos em desenvolver uma solução que nos ajude na hora de selecionar o que mais gostamos. Caso você aceite o nosso desafio, precisamos que você implemente um sistema (fique a vontade pra escolher entre web ou mobile) onde será possível buscar por filmes e series utilizando a API (http://www.omdbapi.com/). Com todos esses filmes a nossa disposição queremos basicamente separar nossos favoritos, para que possamos encontrá-los facilmente depois. Portanto a sua solução deve:

- Permitir a busca por filmes que gostamos
- Listar os filmes encontrados
- Permitir que escolhamos nosso filmes favoritos
- Permitir que removamos um filme de nossos favoritos (às vezes um filme enjoa)
- Listar nossos filmes favoritos

Para auxiliar você nesse processo fizemos um protótipo rápido utilizando o Figma. Se quiser conferir é só seguir o link:

[https://www.figma.com/proto/UE8zfSxxf8K0TzpgslbYhz/CinemAPP?node-id=1%3A28&scaling=contain](https://www.figma.com/proto/UE8zfSxxf8K0TzpgslbYhz/CinemAPP?node-id=1%3A28&scaling=contain)

Para facilitar um pouco mais as coisas, já deixamos separada uma chave de acesso para a API (ou você pode criar a sua também):

```
Chave de API: 925eba28
Exemplo requisição: GET http://www.omdbapi.com/?apikey=925eba28&s=batman
```

Você pode desenvolver uma solução web ou mobile (react-native), se escolher a primeira opção é importante que consigamos utilizá-la também em nossos celulares.

## Entrega da sua solução

Deixe bem claro suas premissas, suposições e como executamos seu código. Para entregar essa solução, de um “fork” neste repositório e nos mande o link do novo repositório quando finalizar a tarefa.

No mais aguardamos seu retorno. Boa sorte :)

## Configuração incial

Para a instalação dos pacotes execute o seguinte comando:

- yarn

# Execução local

Para executar o App em modo de devel, execute os seguintes comandos:
OBS: Assegure que o comando anterior foi executado.

- yarn dev

# Gerando a apk de instalção

Caso queira gerar uma apk de debug para testar o app fora do ambiente de devel, execute o seguinte comando:

- yarn build-android
