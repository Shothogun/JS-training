# JS-training

A little repository with JS codes samples to practise React, Node and React Native

## Rodando o projeto Back

`yarn dev`

Acesso pela porta https://localhost:3333


## Rodando o projeto Front

`yarn webpack-dev-server --mode development`

Acesso pela porta https://localhost:8080

## Front-end project setup

### Configurando Babel
- Entrar no diretório do projeto e digitar: `yarn init -y`
- Instalar react:  `yarn add react react-dom`
- Fazer o projeto interpretar o JS, uso do Babel e loaders do Webpacker:
`yarn add @babel/core @babel/preset-env @babel/preset-react @babel/cli webpack webpack-cli`
- @babel/preset-env: codigo JS é adaptado para o ambiente em que o codigo funciona
- @babel/preset-react: codigo HTML ser inserido no codigo JS
- @babel/cli: interface de comando do babel pelo terminal
- Configurar o arquivo `babel.config.js`
- Converter arquivo em um formato para outro pelo Babel:
`yarn babel path_arquivo_entrada --out-file path_saida`

### Configurando o Webpack
- `yarn add babel-loader`
- Configurar arquivo `webpack.config.js`
- Gerar o arquivo resumo do codigos JS `yarn webpack --mode development`
  - Agora o Webpack é capaz de encontrar os arquivos JS e realizar as exportações e importações dos arquivos
- Para não precisar juntar os codigos a todo momento no webpack, instalar a seguinte biblioteca: `yarn add webpack-dev-server -D`
  - Configurar o `webpack.config.js`
  - Executar `yarn webpack-dev-server --mode development`

### Componetização
- Componente: função JS que renderiza HTML
- Arquivos de componetização **começam com letra maiúscula**
- Fragments: <>
  - Serve para colocar dois componentes consecutivos sem a necessidade de colocar uma Tag que envolva eles

### Propriedade
- Informação que pode ser passada para o componente pai para filho

#### Estado
- useState: retorna
  1. Valor inicial da variavel
  2. Funcao de atualizacao da variavel

#### Imutabilidade
- Variavel não podem ser modificadas, mas recriadas para terem novos valores

- Operador `...`: percorrer um array

### Importando CSS e Imagens

#### Configurando CSS
- Modificar o `webpack.config.js`
- Instalar `yarn add style-loader css-loader`
- **CSS loader:** interpretar os códigos CSS
- **style loader:** usa o codigo interpretado pelo CSS loader e carrega no HTML

#### Configurando uso de Imagens
- Instalar `yarn add file-loader`

### Listando projeto API

#### Conexão API
- Instalar axios(library que conecta dois projetos front e back-end via requisições): `yarn add axios`
- Criar pasta services contendo arquivos que lidam com as requisições do projeto

#### Configurando o Back
- Instalar o cors: `yarn add cors`
- Importar no index.js do Back, permitindo a conexão com outros projetos

#### Adaptar o Babel
- Para que o Babel funcione com o mecanismo async instalar ` yarn add @babel/plugin-transform-runtime -D`

## Back-end project setup


### Criando projeto Node

- Criar diretorio do projeto ```mkdir backend``` e entrar nela ```cd backend```
- Executar ```yarn init -y``` 
- Criar pasta src e dentro dela o index.js
- Adicionar o framework express ```yarn add express```

### Configurando Nodemon
- ```yarn add nodemon -D```
- Executar nodemon: ``yarn nodemon src/index.js``

#### Adicionar atalhos de comando
- Abrir package.json e inserir entre "license" e "dependencies":
 ```
"scripts": {
    "dev": "nodemon"
  },
```
- E modificar   ```"main": "index.js",``` por ```"main": "src/index.js",```

### Tipos de parametros
- Query params: Filtros e paginação
- Route params: Identificar recursos(atualizar/deletar)
- Request body: Conteúdo para a crição e atualização (JSON)

### Middlewares

- Interceptador de requisições que interrompe totalmente a requisição ou altera dados da requisição
- Os middlewares também podem ser inseridos dessa forma:
```
app.get('/projects', middleware1, middleware 2,  (request, response) => {
...
}
```



