# Micro Front-End com Angular Elements

Desenvolvi um micro front-end com a finalidade de prática e estudo.

A aplicação está dividida em 3 partes, um app master e um projeto com dois micros apps que são consumidos no app master.

O projeto não tem nenhum conteúdo específico, a ideia era criar dois menus e navegar entre eles usando micro front ends com a técnica de Angular Elements, por este motivo a aplicação não tem conteúdo algum =)

Estou aberto a sugestões e melhorias, é um ponta pé inicial e sei que preciso me preocupar com muitas outras coisas, e esse vai ser o foco daqui para frente.

## Pré requisitos

- Instalar [NodeJS](https://nodejs.org/en/)
- Instalar [Angular](https://angular.io/guide/setup-local)
- Instalar [Extensão do Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) do VSCode
## Executando o projeto

### - Instalando as dependências

Após clonar o projeto é preciso instalar as dependências, o projeto final esta na branch 'main', use o seguinte comando para instalar as dependências:
```
npm i
```
### - Executando o front end

Antes de rodar a aplicação principal, precisamos rodar os micro apps primeiro, para isso vamos usar a ferramenta Live Server para rodar os micro apps em outra porta, mas para os micro apps serem executados precisamos realizar o build dos mesmos primeiro, para buildar esses apps execute o seguinte comando em seu terminal.

```
npm run build:produtos && npm run build:contato
```

Uma vez o build realizado, podemos executar esses projetos através do Live Server usando o seguinte comando:

```
npx live-server ./dist
```

Para rodar a aplicação principal consumindo os micro apps use o seguinte comando:

```
npm run start
```

Feito isso navegue para http://localhost:4200

![Build](https://i2.wp.com/perdidas.com.br/wp-content/uploads/2018/09/elmo-fogo.gif?resize=540%2C368)

Pronto, a aplicação vai estar rodando, navegue entre os links de produtos e contato, aparentemente nada fora do normal, mas por debaixo dos panos esses links estão consumindo micro apps, espero que tenha ajudado de alguma forma, segue referencia de estudo que usei aqui.

### - Referência de estudo

[Webinar Micro App](https://www.youtube.com/watch?v=54wcutNmsd0)
