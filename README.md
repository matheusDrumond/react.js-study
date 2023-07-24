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
- Necessidade de colocar os elementos de um componente dentro de um elemento pai, normalmente um wrapper padrão (fragment) '<> </>' ou em uma div. !Apenas um elementos pai por componente, que precisa estar dentro de um return!;
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
- Renderizaçaõ de lista com reaproveitamento de componentes -> O array de objetos 'cars' (em App.jsx) é renderizado com um componente para cada objeto, reaproveitando os componentes e lidando com casos reais, em que podem ser renderizados os dados de acordo com oque é recebido do servidor;
- Fragments -> São tags vazias '<>...</>', que não existem no HTML, apenas no jsx e servem como elemento pai de um componente. Quando é necessário colocar mais de um 'elemento pai' em um componente os fragments são utilizados como um grande elemento pai que une tudo que estiver dentro, além de não alterar a estrutura do html como uma div alteraria. Exemplificado no componente Fragments;
- Children prop -> É uma forma de acessar algum jsx que esteja dentro do local onde um componente esteja importado. O componente Container é importado em App e uma tag é inserida dentro dele, para que esse HTML seja impresso corretamente é necessário acessar children, como se fosse qualquer outra prop e utilizá-la, como feito no componente;
- Functions como props -> São props comuns que permitem executar funções criadas no elemento pai dentro do elemento filho. Dentro de App.jsx foi criada a função showMessage, importada como prop pelo componente ExecuteFunction, assim dentro do componente filho foi possível criar um botão que execute a função criada no componente pai;
- State lift -> Quando um valor é elevado do componente filho para o componente pai. Geralmente existem dois componentes, um que utiliza o state e outro que altera o state, então essas informações de valor precisam transitar entre elas passando pelo elemento pai para que sejam exibidas corretamente. Dentro de App existem dois componentes, o Message(1) e o ChangeMessageState(2), em que o 2 altera o estado da mensagem, transmite para o App, que transmite para o Message atualiza o estado e é renderizado em App para exibi-lo;

# 04 - React e CSS
- CSS Global -> O arquivo index.css é onde são feitas as alterações de estilo a nível global da aplicação, normalmente utilizado para resetar estilos que já vem automáticos no HTML ou para padronizar algumas questões, como deixar todos os títulos, formulários e fontes iguais e manter uma identidade visual;
- CSS de Componentes -> Utilizado para estilizar um componente específico, e importado dentro dele. Normalmente os dois arquivos possuem o mesmo nome, por exemplo: O componente principal App.jsx importa o App.css, sua folha de estilo. Importante lembrar que esse método não é scoped, ou seja, pode acabar interferindo em outros componentes ou partes de código indesejadas, principalmente em aplicações maiores. Nessas situações é importante usar bem classes e IDs para não afetarem códigos indesejados;
- Inline-style -> O inline-style do React é igual ao css, adicionado aos elementos através do atributo style, que recebe o estilo como um objeto, a sintaxe é exemplificada em App.jsx. Assim como em qualquer HTML, o css inline deve ser evitado, pois pode dificultar a manutenção e tornar o código imprevisível. Mas é importante conhecê-lo para saber lidar caso encontre-o em algum projeto, conseguir 'corrigir' ou melhorá-lo;
- Inline-style dinâmico -> O inline-style dinâmico aplica estilos baseados em uma condicional, para isso, é aplicado um if ternário que retorna duas possibilidades de estilo baseado no resulado da condicional;
- Classes dinâmicas -> É uma prática melhor que o inline-style, em que é criada a classe em um arquivo css separado e importado, e a atribuição de classes vai depender de uma condicional. Em App.jsx existe uma atribuição de classe dinâmica, em que as classes estão declaradas em index.css e dependendo do resultado de um if ternário é definida a classe;
- CSS modules -> Similar ao CSS de componente, porém é scoped, ou seja, é uma forma de criar CSS para componentes de forma que não vaze para outras partes indesejadas do código. Deve ser importada da mesma forma, com uma pequena alteração na sintaxe que pode ser observada na importação do componente Title, a única diferenca é que o nome do arquivo css tem que ter .module.css no final ao invés de apenas .css;

# 05 - Forms com React
- !Todas as sintaxes dos tópicos passados estarão registradas no componente MyForm!;
- Criação de formulários -> São identificados com a tag form normalmente, com algumas diferenças sintáticas. Não é usado o atributo action, pois as requisições serão feitas de forma assíncrona;
- Tag label envolvendo o input -> Abordagem sugerida pela própria documentação do React. Torna o atributo htmlFor opcional, simplificando o código sem perder a semântica;
- Manipulação de dados -> O hook useState será utilizado para gerenciar os dados recebidos nos inputs, podendo armazená-los nas variáveis e utilizar o set para alterar. Existem duas formas de fazê-lo, como feito no input de name, ou com o inline-state feito no input de e-mail;
Envio do formulário -> O listener onSubmit, ao ser colocado na tag de abertura do form, permite alterar o funcionamento de submissão. Primeiramente é possível cancelar o reload da página através do método preventDefault no parâmetro de evento que todos os eventos recebem e assim fazer o envio  de todos os dados recebidos para o servidor de forma assíncrona e não quebrar a experiência do usuário;
- Controlled inputs -> Alguns inputs podem receber valores 'pré-prontos' para agilizar processos, por exemplo, no App foi setado um usuário, e dentro do componente MyForm foi construído uma condicional em que se houver usuário os valores dos inputs de nome e e-mail já estariam preenchidos com as suas informações. Isso pode servir para respostas padrão ou outros tipos de facilidades;
- Resetar formulários -> Em alguns casos é necessário limpar os campos de input após o envio, principalmente se o usuário precisar preencher mais de uma vez o forms, em casos de cadastrar produtos por exemplo ou outras tarefas que exijam a repetição. Com os states e os controlled inputs que já foram tratados isso fica fácil, basta atribuir um valor vazio aos inputs, '', dentro do evento de submit.
- Observação: os 'inputs' de select e textarea tem sintaxes muito semelhantes e formas de obter o valor iguais, também são tratadas dentro do MyForm;