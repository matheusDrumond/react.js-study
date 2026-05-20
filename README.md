# React.js Study
Esse é um repositório com arquivos dos meus estudos de React.js que poderão ser consultados por qualquer pessoa que também esteja estudando para possivelmente esclarecer dúvidas.

> **Atualizado em 2025** para refletir React 19, Vite 6, React Router v7, ESLint v9 e demais mudanças do ecossistema desde 2023.

---

# 01 - Seção de introdução
- Criação dos projetos em React: <br>- A pasta '01-intro' foi **migrada de Create React App para Vite** (CRA foi oficialmente descontinuado em 2023 e não recebe mais atualizações);<br>
                                  - A pasta 'vite-init' foi criada com o comando `npm create vite@latest` → forma moderna e rápida de iniciar um projeto em React;
- **Create React App (CRA) está depreciado**: use sempre Vite (`npm create vite@latest`) ou frameworks como Next.js para novos projetos. O CRA não tem manutenção ativa desde 2023;
- Em ambos os projetos foi alterado o retorno da função App para aplicar um Hello World padrão;
- Instalação da extensão 'ES7 + React/Redux/React-Native snippets' que proporciona atalhos para maximizar a produtividade no desenvolvimento;
- Configuração do Emmet (extensão padrão do VS Code) para auxiliar na criação de HTML dentro dos arquivos .js ou .jsx;
- Utilização do 'className' para atribuir uma classe a um elemento do React, e alteração do seu estilo no arquivo 'App.css';

# 02 - Fundamentos do React
- Criação de componentes e 'export default >componente<' para utilização posterior em outros arquivos;
- Importação de componentes por meio de 'import Component from "./components/Componente"', feito com o FirstComponent;
- Necessidade de colocar os elementos de um componente dentro de um elemento pai, normalmente um wrapper padrão (fragment) '<> </>' ou em uma div. !Apenas um elementos pai por componente, que precisa estar dentro de um return!;
- Comentários com // no js e com {/* */} no jsx;
- Template Expressions - colocar códigos js dentro de {} no jsx, sintaxe -> {algumCodigo} para acessar variáveis, propriedades de objetos e executar console.log(), por exemplo;
- Hierarquização de componentes, componentes importados dentro de outros;
- Eventos -> Como adicionar eventos aos componentes, as funções criadas fora e as oneline functions;
- Renderização: criar funções que retornam HTML fora do return do componente e dar diferentes procedimentos dependendo da lógica, a função renderSomething dentro do componente Events;

# 03 - Avançando em React
- Adicionando Imagens, através da pasta public e da pasta assets, diferentes abordagens dependendo se a imagem está dentro da pasta src ou não, direto no App.jsx;
- Hooks -> Basicamente são funções que vão agilizar o desenvolvimento. Alguns hooks já vem prontos do React e outros podem ser criados pelos devs de forma personalizada, chamados de custom hooks;
- Um dos hooks mais utilizados é o useState, serve para gerenciar o estado de algum dado, funciona melhor que as variáveis pois é re-renderizado com a mudança de valores exemplificado em ManageData;
- Renderização em lista -> é possível renderizar dados de listas através do jsx para exibir as informações dentro de um array, como feito no componente ListRendering utilizando o método map de arrays;
- Keys -> Os dados renderizados em lista devem conter keys únicas para cada item, é possível ver duas formas de atribuir keys no arquivo do componente ListRendering;
- Previous State -> quando o estado atual de um state serve de base para uma modificação e retorna um novo estado futuro, como feito no componente ListRendering, em que a função deleteRandom utiliza o estado atual de um array de objetos de usuários e a partir do método filter gera um novo estado para a lista;
- Renderização condicional -> Imprimir uma parte do template baseado em uma condição, no componente ConditionalRender é possível ver 2 tipos de sintaxe para as renderizações condicionais, desde checagens mais simples, até as de estruturas mais complexas;
- Props -> Propriedades de um componente que permite um componente filho extrair dados de um componente pai, em ShowUserName foi extraído através de props o nome e o userName declarados em App.jsx;
- Destructuring de props -> Muitas vezes são atribuídas mais de uma propriedade aos componentes e para facilitar isso é usado o destructuring para simplificar a forma de utilizar as props, no componente CarDetails as propriedades de marca, quilometragem e cor são desestruturadas para simplificar a utilização dos dados;
- Reaproveitamento de componente -> Em situações de trabalhar com vários tipos de dados e informações o reaproveitamento de componentes é muito importante, o CarDetails é reutilizado várias vezes dentro do App.jsx para renderizar informações de vários carros diferentes;
- Renderização de lista com reaproveitamento de componentes -> O array de objetos 'cars' (em App.jsx) é renderizado com um componente para cada objeto, reaproveitando os componentes e lidando com casos reais, em que podem ser renderizados os dados de acordo com o que é recebido do servidor;
- Fragments -> São tags vazias '<>...</>', que não existem no HTML, apenas no jsx e servem como elemento pai de um componente. Quando é necessário colocar mais de um 'elemento pai' em um componente os fragments são utilizados como um grande elemento pai que une tudo que estiver dentro, além de não alterar a estrutura do html como uma div alteraria. Exemplificado no componente Fragments;
- Children prop -> É uma forma de acessar algum jsx que esteja dentro do local onde um componente esteja importado. O componente Container é importado em App e uma tag é inserida dentro dele, para que esse HTML seja impresso corretamente é necessário acessar children, como se fosse qualquer outra prop e utilizá-la, como feito no componente;
- Functions como props -> São props comuns que permitem executar funções criadas no elemento pai dentro do elemento filho. Dentro de App.jsx foi criada a função showMessage, importada como prop pelo componente ExecuteFunction, assim dentro do componente filho foi possível criar um botão que execute a função criada no componente pai;
- State lift -> Quando um valor é elevado do componente filho para o componente pai. Geralmente existem dois componentes, um que utiliza o state e outro que altera o state, então essas informações de valor precisam transitar entre elas passando pelo elemento pai para que sejam exibidas corretamente. Dentro de App existem dois componentes, o Message(1) e o ChangeMessageState(2), em que o 2 altera o estado da mensagem, transmite para o App, que transmite para o Message atualiza o estado e é renderizado em App para exibi-lo;
- **React 19 — ref como prop**: a partir do React 19, `ref` pode ser passado diretamente como prop para componentes funcionais, eliminando a necessidade do `forwardRef`. Sintaxe: `function MyInput({ ref, ...props }) { return <input ref={ref} {...props} /> }`;

# 04 - React e CSS
- CSS Global -> O arquivo index.css é onde são feitas as alterações de estilo a nível global da aplicação, normalmente utilizado para resetar estilos que já vem automáticos no HTML ou para padronizar algumas questões, como deixar todos os títulos, formulários e fontes iguais e manter uma identidade visual;
- CSS de Componentes -> Utilizado para estilizar um componente específico, e importado dentro dele. Normalmente os dois arquivos possuem o mesmo nome, por exemplo: O componente principal App.jsx importa o App.css, sua folha de estilo. Importante lembrar que esse método não é scoped, ou seja, pode acabar interferindo em outros componentes ou partes de código indesejadas, principalmente em aplicações maiores. Nessas situações é importante usar bem classes e IDs para não afetarem códigos indesejados;
- Inline-style -> O inline-style do React é igual ao css, adicionado aos elementos através do atributo style, que recebe o estilo como um objeto, a sintaxe é exemplificada em App.jsx. Assim como em qualquer HTML, o css inline deve ser evitado, pois pode dificultar a manutenção e tornar o código imprevisível. Mas é importante conhecê-lo para saber lidar caso encontre-o em algum projeto, conseguir 'corrigir' ou melhorá-lo;
- Inline-style dinâmico -> O inline-style dinâmico aplica estilos baseados em uma condicional, para isso, é aplicado um if ternário que retorna duas possibilidades de estilo baseado no resultado da condicional;
- Classes dinâmicas -> É uma prática melhor que o inline-style, em que é criada a classe em um arquivo css separado e importado, e a atribuição de classes vai depender de uma condicional. Em App.jsx existe uma atribuição de classe dinâmica, em que as classes estão declaradas em index.css e dependendo do resultado de um if ternário é definida a classe;
- CSS modules -> Similar ao CSS de componente, porém é scoped, ou seja, é uma forma de criar CSS para componentes de forma que não vaze para outras partes indesejadas do código. Deve ser importada da mesma forma, com uma pequena alteração na sintaxe que pode ser observada na importação do componente Title, a única diferença é que o nome do arquivo css tem que ter .module.css no final ao invés de apenas .css;

# 05 - Forms com React
- !Todas as sintaxes dos tópicos passados estarão registradas no componente MyForm!;
- Criação de formulários -> São identificados com a tag form normalmente, com algumas diferenças sintáticas. Não é usado o atributo action, pois as requisições serão feitas de forma assíncrona;
- Tag label envolvendo o input -> Abordagem sugerida pela própria documentação do React. Torna o atributo htmlFor opcional, simplificando o código sem perder a semântica;
- Manipulação de dados -> O hook useState será utilizado para gerenciar os dados recebidos nos inputs, podendo armazená-los nas variáveis e utilizar o set para alterar. Existem duas formas de fazê-lo, como feito no input de name, ou com o inline-state feito no input de e-mail;
- Envio do formulário -> O listener onSubmit, ao ser colocado na tag de abertura do form, permite alterar o funcionamento de submissão. Primeiramente é possível cancelar o reload da página através do método preventDefault no parâmetro de evento que todos os eventos recebem e assim fazer o envio de todos os dados recebidos para o servidor de forma assíncrona e não quebrar a experiência do usuário;
- Controlled inputs -> Alguns inputs podem receber valores 'pré-prontos' para agilizar processos, por exemplo, no App foi setado um usuário, e dentro do componente MyForm foi construído uma condicional em que se houver usuário os valores dos inputs de nome e e-mail já estariam preenchidos com as suas informações. Isso pode servir para respostas padrão ou outros tipos de facilidades;
- Resetar formulários -> Em alguns casos é necessário limpar os campos de input após o envio, principalmente se o usuário precisar preencher mais de uma vez o forms, em casos de cadastrar produtos por exemplo ou outras tarefas que exijam a repetição. Com os states e os controlled inputs que já foram tratados isso fica fácil, basta atribuir um valor vazio aos inputs, '', dentro do evento de submit;
- Observação: os 'inputs' de select e textarea tem sintaxes muito semelhantes e formas de obter o valor iguais, também são tratadas dentro do MyForm;
- **React 19 — Form Actions**: no React 19 é possível passar uma função assíncrona diretamente no atributo `action` do `<form>`. O React chama essa função automaticamente com um `FormData` na submissão, eliminando a necessidade do `onSubmit` + `preventDefault`. Use em conjunto com `useActionState` para gerenciar o estado do resultado e `useFormStatus` (importado de `react-dom`) para saber se o formulário está sendo enviado;

# 06 - Projeto prático
- Para praticar, construí um projeto de Secret Word baseado no código criado pelo [Matheus Battisti](https://github.com/matheusbattisti). Dentro do projeto foi possível praticar o uso dos componentes, uso de hooks e manipulação de states, renderizações condicionais e renderizações de listas, lógica, uso do CSS com React, formulários e destructuring de props;
- Código todo comentado e organizado disponível para acesso também;
- [Clique aqui para jogar!](https://matheusdrumond.github.io/secret_word/)

# 07 - Requisições HTTP com React
- Nessa sessão vamos criar o projeto React normalmente e vamos instalar o JSON server, um pacote npm que simula uma API, e assim aprender a fazer as requisições e tratamento dos dados recebidos e enviados;
- A pasta data vai conter os dados utilizados na simulação, os que serão manipulados nas requisições;
- Dentro do package.json configuramos o script 'server', para rodarmos o nosso servidor simulado. Agora que acabaram as configurações, vamos começar os estudos de fato;
- !Todas os exemplos de aplicações dos tópicos estarão representados dentro do próprio App.jsx;
- **json-server v1**: o projeto foi atualizado para a versão 1 do json-server. A principal diferença é que o flag `--watch` foi removido (agora é o comportamento padrão), então o script ficou `json-server data/db.json` em vez de `json-server --watch data/db.json`;
- useEffect -> Esse hook já foi utilizado dentro do jogo e pode ser que você já conheça. Ele monitora o estado de partes dos componentes e vai ser muito útil para evitar requisições desnecessárias, já que vai evitar que as requisições sejam feitas sob condições e não por renderização. Estará sempre presente nas requisições assíncronas;
- Resgatando dados da API -> Por meio do hook useEffect foi possível desenvolver uma função assíncrona que resgata os dados da API utilizando o método nativo do JavaScript: fetch(). E após tratar os dados recebidos e converter para JSON, foi possível fazer uma renderização de lista dentro do próprio App;
- Adicionando dados -> Assim como foi possível receber e renderizar os dados recebidos pela API, também é possível enviar e salvar dados para ela. Para isso, é possível utilizar o método fetch com algumas alterações, é necessário informar o método, nesse caso o POST, os headers e o body, como visto na sintaxe dentro do próprio App;
- Carregamento de dados dinâmico -> Quando a nossa função de cadastrar um novo produto foi executada ele foi adicionado, mas só estava aparecendo na lista quando ocorria um reload da página, para deixar a experiência mais fluida, foi adicionado ao fim da função handleSubmit um setProducts para re-renderizar o componente e adicionar o novo produto à lista;
- Custom hooks -> É normal dividir algumas funções que vão ser reutilizadas em hooks separados para limpar os componentes em que serão utilizados, nesse caso podemos criar hooks para realizar as requisições, já que serão efetuadas muitas vezes dentro do código. A nomenclatura vai seguir o padrão do React de use(Nome da função), como um useFetch e eles ficam armazenados geralmente na pasta hooks, assim como fazemos com os componentes na pasta components;
- Refatorando o POST -> Para utilizar outros métodos que não sejam GET no useFetch, vamos configurar formas de utilizar o hook com o POST (A palavra fetch significa buscar, ou seja, deveria ser para um hook de resgate de dados, mas para simplificar vou utilizá-lo para o método POST também);
- Método DELETE -> Além do GET e POST, o DELETE também é muito importante dentro dos métodos http, e foi adicionado no nosso custom hook;
- Estado de loading -> Como estamos trabalhando com funções assíncronas, é normal que haja um tempo de resposta entre a requisição e a chegada da resposta para o usuário, então é interessante identificar esse tempo de carregamento dentro do próprio hook, ou seja, quando começa e quando termina o loading. Dessa forma, é possível adicionar elementos para alterar a experiência do usuário, como foi feito na renderização da lista;
- Estado de loading em outros métodos -> Assim como feito em GET, é possível receber a informação do carregamento no POST por exemplo. Mas aqui a finalidade pode ser outra, enquanto um dado é enviado para o backend pode ser interessante bloquear algumas ações, como o envio de outro dado, afim de não sobrecarregar o sistema ou evitar requisições duplicadas;
- Tratando erros -> Além dos estados de resgate de dados e o de carregamento também existe a possibilidade de ocorrerem erros durante o envio e recebimento de dados com o backend. Assim, podem ser tratados através de try e catch e alterar os próprios elementos da aplicação em caso de erro. No componente mesmo quando houver erro foi setado para não exibir a lista e imprimir uma mensagem de erro para o usuário;
- Com a adição do tratamento de erros, já estamos sabendo lidar com grande parte dos cenários possíveis nessas conexões: Requisição concluída com sucesso, carregamento dos dados e os erros;

# 08 - React Router
- Dentro de grandes projetos as aplicações vão precisar ter mais de uma página. Por exemplo, a aplicação pode ter uma home page, uma página de busca, outra para visualizar os produtos individualmente, reviews, e por aí vai. E o React Router é um pacote externo do React que permite criar essas páginas e alternar entre elas, então muito possivelmente em grandes projetos vocês vão se deparar com o uso de Router, ou vão precisar usá-lo, é indispensável conhecê-lo;
- **React Router v7** (novembro 2024): o pacote foi atualizado para a versão 7. Para uso básico (como nesse projeto), a API do v6 continua funcionando sem mudanças — `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useParams`, `useNavigate` permanecem iguais;
- **Novo padrão recomendado no v7**: para projetos novos, a documentação recomenda `createBrowserRouter` + `RouterProvider` em vez de `<BrowserRouter>`. Esse padrão permite definir `loaders` e `actions` por rota (data APIs), eliminando a necessidade de buscar dados dentro de `useEffect`:
  ```jsx
  // v7 — padrão recomendado para novos projetos
  import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  
  const router = createBrowserRouter([
    { path: '/', element: <Home />, loader: () => fetch('/api/posts') },
    { path: '/about', element: <About /> },
  ])
  
  ReactDOM.createRoot(root).render(<RouterProvider router={router} />)
  ```
- **React Router v7 como framework**: o v7 também pode ser usado no modo "framework" (similar ao Remix), com SSR e file-based routing. Para estudos de SPA (Single Page Application), o modo "library" (como foi usado aqui) é suficiente;
- Inicialização -> Para utilizar o React Router ele precisa estar instalado no seu projeto: `npm i react-router-dom`;
- Configurações -> Antes de começar a usar o Router, algumas coisas precisam ser configuradas:
- BrowserRouter: Define a área do nosso App em que serão feitas as trocas de páginas, o que estiver dentro do BrowserRouter vai interagir com a troca de páginas;
- Routes: Define o grupo de rotas, o que estiver dentro será alterado entre a troca de página;
- Route: Define a rota de cada elemento de forma individual, fica dentro do Routes;
- Importações -> Antes de utilizar as configurações citadas no tópico anterior, elas precisam ser importadas, assim como feito dentro do nosso App;
- Para administrar as páginas que vão ser navegadas, é padrão criar a pasta 'pages', semelhante a pasta components, onde vão ser armazenadas as páginas para melhorar a organização;
- Para navegar entre as páginas, vai ser necessário utilizar o Link do React Router, e configurar o parâmetro 'to' com o valor da URL/path, para redirecionar o usuário para a página desejada. Assim que criados, vamos organizá-los dentro de uma navbar;
- Carregamento de items -> Para visualizar, foi copiado o hook useFetch criado na última seção, e imprimimos os items na página inicial e não em outras páginas;
- Rotas dinâmicas -> Assim como criamos as rotas anteriormente para acessar Home e About pages, agora podemos criar uma rota padrão para acessar cada um dos produtos individualmente, em que o path constaria /products/:id e :id seria a parte dinâmica que varia dependendo do produto que o usuário deseja acessar. A partir disso foi possível criar um link em cada um dos produtos quando estão aparecendo na home que leva diretamente para os detalhes dele;
- Carregamento dinâmico de dados -> Após gerar uma URL para visualizar cada produto e permitir que o usuário acesse essa página, agora temos que carregar os dados do produto selecionado para serem impressos no componente. Para isso vamos usar o hook useFetch novamente para trazer as informações dos produtos e exibi-las;
- Nested routes -> As nested routes se referem a URLs mais complexas, como: '/products/:id/something' para mostrar algum detalhe dentro de uma URL que já é dinâmica e específica. Nesse caso foi possível criar uma página de informações do produto, que varia de acordo com o produto selecionado;
- Error 404 -> É possível criar facilmente uma página 404 com o React Router, basta criar o componente da página e definir um path *, dessa forma qualquer URL que não estiver entre as rotas definidas vai cair nessa página;
- Link ativo -> É possível que vocês já tenham visto em sites quando o usuário está em determinada seção ou página e o ícone/palavra correspondente na barra de navegação tem alguma alteração de estilo, para gerar esse efeito, é necessário trocar o Link por NavLink dentro da nossa Navbar e acessar a propriedade isActive, que o próprio componente fornece, para atribuir classes dependendo se a URL atual é compatível ou não com a que está no atributo 'to' que já conhecemos. Se o link estiver ativo e houver uma classe 'active' o próprio jsx já atribui ela ao link automaticamente;
- Search Params -> Essa é uma forma de ter acesso ao que o usuário está procurando através de uma URL gerada em uma barra de pesquisa, ou seja, uma forma fácil de gerar uma funcionalidade de busca. No nosso caso foi criado uma barra de pesquisa que encontra os itens correspondentes ao pedido do usuário, a sintaxe pode ser vista em Search.jsx;
- Redirecionamento de URL -> Talvez uma URL antiga tenha sido substituída por uma nova e quando o usuário acessar a antiga você precise redirecioná-lo para a nova. Assim, basta criar uma rota como as outras mas em elemento ao invés de atribuir um componente, você pode atribuir a URL correta;

# 09 - Context API
- O que é? Context API é um recurso que facilita o compartilhamento de estados entre componentes. Quando houverem estados que vão ser necessários em diversos componentes ou que precisa ser utilizado em componentes muito 'distantes' dentro da aplicação, utilizar o state lift tantas vezes pode tornar o código muito complexo e por isso surge a necessidade de declarar dados 'globais';
- O Context precisa encapsular os componentes que vão utilizar/manipular os valores, normalmente armazenados no App.jsx ou index.jsx/main.jsx e os contextos estarão guardados na pasta context;
- Criando um contexto -> Para gerar um contexto, dentro do arquivo CounterContext.js, primeiro é necessário importar o createContext do React, e depois dar o export default padrão daquele contexto, assim como a sintaxe presente no arquivo;
- Criando um provider -> O que é o provider? Ele delimita onde será utilizado aquele contexto, e passa o valor do contexto para os componentes envolvidos, nesse exemplo, em main.jsx envolvemos o App.jsx no nosso provider, ou seja, tudo que estiver dentro do App receberá aquele valor e poderá usá-lo;
- **React 19 — sintaxe simplificada do Provider**: no React 19, não é mais necessário usar `<MeuContexto.Provider value={...}>`. Basta usar o próprio contexto como componente: `<MeuContexto value={...}>`. Ambas as sintaxes funcionam, mas a nova é mais limpa. O projeto já foi atualizado para usar a nova forma;
- Alterando contextos -> Para alterar o valor do contexto, normalmente vai ser criado um componente que utilize a função de mudança de contexto, a mudança será feita no Context e poderá ser acessada por todos os componentes que utilizarem o contexto;
- Acesso ao contexto -> Só para entender melhor a globalidade desse valor, o contexto foi utilizado em todas as páginas da aplicação e sempre que foi alterado dentro da Home, o valor mudou simultaneamente em todos os outros componentes que utilizam o contexto;
- Refatorando o contexto para um hook -> Para simplificar o uso do context, pode ser uma boa ideia utilizar um hook, dessa forma não será necessário importar o contexto dentro de cada componente em que for utilizado, apenas o hook, e pode haver uma validação dos valores aceitos nesse contexto. Foi alterado apenas na home a importação e utilização do contexto, nas outras páginas está a utilização convencional, para ficar de exemplo;
- Contextos mais complexos -> Podem ser que existam contextos para manipular várias situações, que podem mudar a resposta daquele context, e para isso vamos utilizar um recurso muito importante, o useReducer;
- useReducer -> Contextos mais complexos podem ter variação no comportamento, e para controlar essas alterações utilizaremos o hook useReducer, que permite manipular dados mais complexos. Dentro do hook podemos determinar diferentes ações utilizando o switch;
- Alterando os contextos mais complexos -> Para realizar a alteração no contexto vamos utilizar uma função chamada dispatch, que já está no nosso reducer. Dentro da função devem estar todas as informações para realizar a troca do valor, utilizando o switch para retornar um novo contexto;

# 10 - Projeto prático 2
- Para praticar, vamos construir um projeto de Mini Blog baseado no código criado pelo [Matheus Battisti](https://github.com/matheusbattisti). Diferente do último projeto prático, vou colocar alguns tópicos aqui pra vocês, já que esse sistema engloba mais tecnologias e complexidades;
- Por fim de práticas pessoais, a aplicação vai ser desenvolvida em inglês, mas os comentários e o relatório aqui estarão escritos normalmente em português;
- Código todo comentado e organizado disponível para acesso também;
- Firebase -> Para servir de banco de dados vamos utilizar este conjunto de serviços fornecidos pelo próprio Google, em que podem ser armazenados nossos dados e realizar autenticações. Dessa forma não precisamos lidar muito com o backend, que não é o nosso foco. Para começar, temos que realizar o [cadastro](https://firebase.google.com/?hl=pt) na plataforma;
- **Firebase v11**: o projeto foi atualizado de v10.9.0 para v11. A API de inicialização e os módulos `firebase/auth` e `firebase/firestore` permanecem compatíveis — sem breaking changes para os padrões usados neste projeto;
- Configuração do firebase -> Vamos cadastrar um novo projeto lá no console, depois de criar, é só copiar as configurações dentro de um arquivo 'config.js' na pasta 'firebase' e criar o banco de dados a partir do Firestore, serviço de data base noSQL disponibilizado dentro do SDK Firebase;
- Router -> Agora que terminamos a configuração do nosso 'backend' por enquanto, vamos partir para configurar as rotas que vamos utilizar dentro do projeto. Na seção 08 eu explico passo a passo como criar as rotas e todo o procedimento para definir e testá-las além de que as sintaxes todas estão representadas dentro dos arquivos da seção. Assim, vamos criar as rotas e as páginas: Home, About (afim de teste apenas, ver se as rotas estão configuradas e funcionando), uma página de Login e uma de cadastro (Sign up). Para deixar mais organizado, as páginas terão suas pastas próprias, com o arquivo jsx, css, do tipo module para não ter risco de vazar, e, se necessário, componentes específicos daquela página;
- Criação do formulário Sign up e Login -> Como grande parte dos recursos do site só estarão disponíveis para usuários logados, é importante então desde já ter essa funcionalidade aplicada, então vamos criá-la. Dentro da página SignUp foi criado um form para realizar o cadastro, e os estilos já estão disponíveis no module e no index.css, pois haverá um estilos para os formulários em geral;
- Sign up -> Para começar vamos criar a lógica do formulário de registro. Então vamos definir os states referentes aos valores dos campos e também definir um para haja algum erro. Depois de definir os states temos que adicionar a função de alterá-los de acordo com o recebido pelo input e setar o valor do input como o state. Ao fim tem que ser criado a checagem da senha, ou seja, se a senha e a senha de confirmação são iguais, e em caso negativo, dar o display na mensagem de erro;
- Hook de autenticação -> Para começar temos que importar algumas funções nativas do próprio firebase, após isso vamos utilizar uma função assíncrona para registrar os usuários, da forma que está escrito dentro do useAuthentication;
- Registrando o usuário no sistema -> Depois de criar o hook e definir como os usuários vão ser registrados, agora dentro da página de sign up devemos importar o que foi exportado pelo hook, e criar o usuário com a função definida;
- VOU PAUSAR O PROJETO POR ENQUANTO, PARA FOCAR NA PRÓXIMA SEÇÃO, DE APROFUNDAMENTO NOS HOOKS, MAS EM BREVE RETOMAREI AO PROJETO (24/08/23);

# 11 - Conhecendo hooks
Nessa seção vamos conhecer a fundo os hooks mais populares e úteis do próprio React e também algumas funcionalidades relacionadas aos custom hooks. Vale lembrar que todos os hooks, sintaxes e exemplos estarão contemplados dentro dos arquivos da seção;

- useState -> O useState é um dos hooks mais utilizados no desenvolvimento com React, o seu principal objetivo é gerenciar valores, podemos acessá-lo e alterá-lo. Isso permite re-renderizar um componente quando seu valor for mudado, proporcionando ao usuário obter o valor mais recente atribuído ao state, o que não seria possível utilizando variáveis;

## Hooks do React 18

- **useTransition** -> Permite marcar atualizações de estado como "não urgentes", mantendo a UI responsiva. Dentro de `startTransition(() => {...})` você coloca operações pesadas (gerar listas grandes, ordenações, etc.). O flag `isPending` indica se a transição está em andamento, podendo ser usado para exibir um spinner ou desabilitar botões. Essencial para não travar o input do usuário enquanto operações custosas acontecem;

- **useDeferredValue** -> Recebe um valor e retorna uma cópia "atrasada" dele. Útil quando há uma parte cara da UI (como uma lista filtrada com muitos items) que não precisa atualizar de forma síncrona com um input. O input usa o valor imediato; a lista usa o `deferredValue`. O React prioriza a atualização do input e adia a re-renderização da parte pesada;

- **useId** -> Gera IDs únicos e estáveis por instância de componente. Principal uso: associar `<label htmlFor={id}>` com `<input id={id}>` de forma acessível, sem precisar gerenciar IDs manualmente ou correr o risco de duplicar. Os IDs gerados são consistentes entre server e client (importante para SSR);

## Hooks do React 19

- **useActionState** -> Gerencia o estado de uma form action: retorna `[state, formAction, isPending]`. `state` contém o resultado da última execução da action; `formAction` é passado para o atributo `action` do `<form>`; `isPending` é true enquanto a action está em andamento. Substitui o padrão manual de `useState + loading + try/catch` em formulários;

- **useFormStatus** (importado de `react-dom`) -> Lê o status do formulário pai mais próximo. Deve ser usado dentro de um componente filho do `<form>`, não no componente que renderiza o form. Retorna `{ pending, data, method, action }`. Útil para criar um componente de `<SubmitButton>` reutilizável que se desabilita automaticamente durante o envio;

- **useOptimistic** -> Permite exibir um estado "otimista" imediatamente, antes da operação assíncrona terminar. Recebe o estado atual e uma função redutora. Enquanto a operação está pendente, o valor otimista é exibido; quando ela termina (com sucesso ou erro), volta ao estado real. Clássico para likes, mensagens de chat e carrinho de compras;

- **use()** -> Hook que lê o valor de uma Promise ou de um Context durante a renderização. Diferente do `useContext`, o `use()` pode ser chamado dentro de condicionais e loops. Para Promises, funciona em conjunto com `<Suspense>` — o componente "suspende" enquanto a Promise está pendente. Exemplo: `const theme = use(ThemeContext)` ou `const data = use(fetchPromise)`;

Todos os exemplos práticos acima estão implementados na página **Hooks React 19** dentro do projeto `11-hooks` (`/react19`).

---

## Resumo das atualizações do ecossistema (2023 → 2025)

| Pacote | Versão antiga | Versão atual | Mudança principal |
|---|---|---|---|
| React | 18.2.0 | 19.0.0 | use(), useActionState, useOptimistic, ref como prop, <Context> sem .Provider |
| Vite | 4.4.x | 6.3.x | Environment API, HMR melhorado, suporte nativo a React 19 |
| react-router-dom | 6.14–6.15 | 7.5.x | createBrowserRouter recomendado, data APIs (loaders/actions), modo framework |
| ESLint | 8.x | 9.x | Flat config (eslint.config.js substitui .eslintrc) |
| json-server | 0.17.x | 1.x | --watch removido (sempre ativo), CLI simplificado |
| Firebase | 10.9.0 | 11.x | Melhorias de performance, API compatível |
| Create React App | 5.x | **Depreciado** | Use Vite ou Next.js |
