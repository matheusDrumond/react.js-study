# React.js Study
Esse é um repositório com arquivos dos meus estudos de React.js que poderão ser consultados por qualaquer pessoa que também esteja estudando para possivelmente esclarecer dúvidas.

# 01 - Seção de introdução
- Criação dos projetos em React: <br>- A pasta '01-intro' foi criada com o comando 'npx create-react-app >nome do projeto<';<br>
                                  - A pasta 'vite-init' foi criada com o comando 'npm create vite@latest' -> Forma mais moderna e rápida de iniciar um projeto em React.
- Em ambos os projetos foi alterado o retorno da função App para aplicar um Hello World padrão;
- Instalação da extensão 'ES7 + React/Redux/React-Native snippets' que proporciona atalhos para maximizar a produtividade no desenvolvimento;
- Configuração do Emmet (extensão padrão do VS Code) para auxiliar na criação de HTML dentro dos arqivos .js ou .jsx;
- Utilização do 'className' para atribuir uma classe a um elemento do React, e alteração do seu estilo no arquivo 'App.css';

# 02 - Fundamentos do React
- Criação de componentes e 'export default >componente<' para utilização posterior em outros arquivos;
- Importação de componentes por meio de 'import Component from "./components/Componente"', feito com o FirstComponent;
- Necessidade de colocar os elementos de um componente dentro de um elemento pai, normalmente um wrapper padrão '<> </>' ou em uma div. !Apenas um elementos pai por componente, que precisa estar dentro de um return!;
- Comentários com // no js e com {/* */} no jsx;
- Template Expressions - colocar códigos js dentro de {} no jsx, sintaxe -> {algumCodigo} para acessar variaveis, propriedades de objetos e executar console.log(), por exemplo;
- Hierarquização de componentes, componentes importados dentro de outros;
- Eventos -> Como adicionar eventos aos componentes, as funções criadas fora e as oneline functions;
- Renderização: criar funções que retornam HTML fora do return do componente e dar diferentes procedimentos dependendo da lógica, a função renderSomething dentro do componente Events;

# 03 - Avançando em React
- Adicionando Imagens, através da pasta public e da pasta assets, diferentes abordagens dependendo se a imagem está dentro da pasta src ou não, direto no App.jsx;
- Hooks -> Basicamente são funções que vão agilizar o desenvolvimento. Alguns hooks já vem prontos do React e outros podem ser criados pelos devs de forma personalizada, chamados de custom hooks;
- Um dos hooks mais utilizados é o useState, serve para gerenciar o estado de algum dado, funciona melhor que a váriaveis pois é re-renderizado com a mudança de valores exemplificado em ManageData;
- Renderização em lista -> é possível renderizar dados de listas através do jsx para exibir as infromações dentro de um array, como feito no componente ListRendering utilizando o método map de arrays;
- Keys -> Os dados renderizados em lista devem conter keys únicas par cada item, é possível ver duas formas de atribuir keys no arquivo do componente ListRendering;
- Previous State -> quando o estado atual de um state serve de base para uma modificação e retorna um novo estado futuro, como feito no componente ListRendering, em que a função deleteRandom utiliza o estado atual de um array de objetos de usuários e a partir do método filter gera um novo estado para a lista;
- Renderização condicional -> Imprimir uma parte do template baseado em uma condição, no componente ConditionalRender é possível ver 2 tipos de sintaxe para as renderizações condicionais, desde checagens mais simples, até as de estrututras mais complexas;
- Props -> Propriedades de um componente que permite um componente filho extrair dados de um componente pai, em ShowUserName foi extraido através de props o nome e o userName declarados em App.jsx;
- Destructuring de props -> Muitas vezes são atribuídas mais de uma propriedade aos componentes e para facilitar isso é usado o destructuring para simplificar a forma de utilizar as props, no componente CarDetails as propriedados de marca, quilometragem e cor são desestruturadas para simplificar a utilizaçaõ dos dados;
- Reaproveitamento de componente -> Em situações de trabalhar com vários tipos de dados e informações o reparoveitamento de componentes é muito importante, o CarDetails é reutilizado várias vezes dentro do App.jsx para renderizar informações de vários carros diferentes;
- Renderizaçaõ de lista com reaproveitamento de componentes -> O array de objetos 'cars' é renderizado com um componente para cada objeto, reaproveitando os componentes e lidando com casos reais, em que podem ser renderizados os dados de acordo com oque é recebido do servidor;