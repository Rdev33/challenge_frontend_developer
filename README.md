# Challenge Frontend Developer - RPE

**1. Arquitetura de Front-end**

*Você precisa definir a arquitetura de uma nova aplicação web que será 
utilizada por milhões de usuários do varejo. Descreva a stack de 
tecnologias que você escolheria (frameworks, bibliotecas, ferramentas) e 
justifique suas escolhas. Como você garantiria que a arquitetura seja 
flexível e escalável para futuras expansões, e aplicável a novas 
aplicações?*

Um framework para uma aplicação robusta, com certeza eu faria o uso do Next.js.
Pensando no lado dos usuários que acessariam a aplicação, eles se beneficiariam com a performance que o próprio framework fornece. Com estratégias e recursos bem implementados de SSR(Server Side Renderigin), SSG(Static Site Generation) e otimizações de imagens, a aplicação teria carregamentos mais rápidos, uma melhor fluídez durante seu uso, garantindo assim uma excelente experiência independente do grande volume de acesso. Esta ideia de stack para o desenvolvimento proposto se paga quando temos um grande exemplo de showcase, no caso o e-commerce da nike(https://www.nike.com/), muito conhecido e acessado em grande escala.

E no ponto de vista dos desenvolvedores, o Next.js é uma excelente opção devido a variedades de recursos disponíveis para o desenvolvimento. Posso citar alguns deles.
- Todos recursos do ecossistema React;
- Suporte ao Typescript: Uma stack que nos ajuda na escrita e leitura do código. Iríamos evitar e "desviar" de bugs durante o desenvolvimento, e também teriámos fácil compreensão das coisas dentro do código, cada função e seus retornos, tipos de variáveis, etc;
- Fácil integração com banco de dados SQL utilizando ORM(prisma);
- Fácil integração com sistemas de autenticação através de grandes bibliotecas como NextAuth.js e Clerk;
- Controle de renderização de páginas com SSR e SSG;
- Roteamento com base em arquivos, tornando ainda mais prático esta funcionalidade que é crucial e sem precisar instalar bibliotecas externas;
- Comunidade de desenvolvedores bem ampla em caso dos devs enfrentarem problemas durante o desenvolvimento;
- Na parte de componentização é possível utilizar um design pattern cujo nome é "Compound Pattern", que tem por objetivo de construir componentes de fácil manutenção com alta legibilidade. Até mesmo uma grande e conhecida bibliteca de UI Kit "Chakra UI" se beneficia desta arquitetura.

Este framework moderno por si só já é preparado para construções de aplicações web escaláveis e flexíveis pelo o que ele tem à oferecer. Implementando todas as funcionalidades essenciais da melhor forma, se guiando pela vasta documentação e todos da equipe estando na mesma "página", conseguiríamos deixar um projeto fácil para dar manutenções, além de acrescentar novas funcionalidades quando precisasse.

Em minha concepção, estas seriam as melhores tecnologias para se trabalhar no projeto:
- Construção do layout:	Tailwind e shadcn/ui para agilizar na construção da interface, aproveitar componentes prontos, além de criar o nosso próprio desing system;
- Gerenciamento de estado global:	Zustand
- Gerenciamento e validação de formulários:	React Hook Form
- Autenticação:	NextAuth.js (JWT e logins em redes sociais)
- Backend/API: Next.js API Routes
- Banco de dados: PostgreSQL (com prisma ORM)
- Armazenamento de imagens e assets: AWS S3
- Deploy: Vercel
- Monitoramento:	Sentry + Vercel Analytics

**2. Manutenção e evolução de projetos**

*Você foi designado para melhorar uma aplicação existente que possui um 
código legado com alta dívida técnica. Qual seria seu plano de ação para 
refatorar o código e reduzir a dívida técnica? Detalhe os passos que você 
seguiria para garantir a qualidade e continuidade da aplicação durante esse 
processo.*

Todas as vezes em que tive a oportunidade de trabalhar com código legado, foi o suficiente para desejar construir tudo do zero. É sempre a alternativa mais rápida e menos dolorosa, mas isso é algo que tem que ser bem avaliado. Hoje em dia eu analiso bem o quadro, os problemas contidos e o que eu vou poder realizar a seguir. Dependendo da situação, eu pensaria num plano de reconstrução, com certeza. Mas não apenas por ser mais fácil, mas sim para ter um projeto o mais atualizado o possível. O risco de ter um projeto obsoleto são muitos, ainda mais se tratando de brechas de segurança, por exemplo. 

Vou detalhar as medidas que tomaria até conseguir chegar em um projeto atualizado e menos problemático.
1. Estudaria bastante os arquivos desse projeto. Primeiramente tenho que entender bem o que ocorre, o que o código faz e como faz. Analisaria a estrutura de diretórios e tentaria identificar se segue ou não algum tipo de arquitetura, ou qualquer informação que sirva como um norte para eu poder prosseguir, isso também inclui buscar informações com funcionários/equipe ou revisão da documentação das funcionalidades, pois preciso ter bem definido na minha mente as regras de negócio do sistema.
2. Após eu ter um bom conhecimento do que se passa em um determinado módulo/funcionalidade(realizaria essas ações com calma, devagar, dando pequenos passos, por partes/módulos), iria provavelmente usar IA para refatorar tal trecho "editável", afim de deixar menos embaralhado, mas fácil de entender, um pouco mais organizado, considerando a versão da linguagem é claro, aplicar a refatoração de fato, onde alteramos o código, mas não o seu funcionamento, sem quebrar, somente no que for necessário. 
3. Aplicando essa tática em todos os lugares possíveis, deixando o código mais limpo, sei que seria possível mexer na estrutura de diretórios, pois na minha refatoração eu iria fazer com que o código no arquivo não dependesse de códigos que estão em outros arquivos(digo isso por experiência própria, que já vi muito). Fazendo dessa maneira, reduzindo acoplamentos entre códigos, reduzindo linhas dos arquivos cada vez mais, garantindo ainda mais uma boa legibilidade, me sentiria mais confortável e seguro para começar a atualizar a versão das linguagens de programação/frameworks utilizados no projeto, pois pra mim este é um detalhe crucial.
4. Então a partir do momento que eu tenho linhas de códigos mais enxutas e fácil de entender, eu posso me preocupar em atualizar a versão das stacks utilizadas a fim de usar recursos novos e recomendados abandonando assim certos códigos antigos e obsoletos. Faria isso quando eu tivesse certeza de que eu poderia mudar, refatorar sem quebrar o projeto. O uso da IA constante seria para agilizar todo o processo. Não que possamos confiar totalmente nessas ferramentas, mas com a minha experiência hoje em dia me sinto seguro e sou capaz de analisar bem o conteúdo gerado e concluir se é compátivel ou não.
5. Todos os passos acima faria parte de um processo demorado e trabalhoso. Mas a príncipio essas seriam as ações que eu tomaria e iria executando até o momento em que chegar em um projeto moderno. E eu também não esqueceria de colocar a aplicação em uma nova arquitetura escalável e flexível para evitar problemas futuros.

**3. Integração com Back-end e APIs:**

*Dada a necessidade de integrar um front-end com várias APIs de diferentes 
serviços, descreva como você estruturaria o código para facilitar a 
manutenção e a escalabilidade. Inclua como você lidaria com autenticação e 
autorização, tratamento de erros, logging e comunicação eficiente entre o 
front-end e as APIs.*

Para exemplificar a minha ideia, irei simular que estou trabalhando com API de e-commerce utilizando o Next.js. Então vamos "supor" que esta API é real, e possui dois endpoints cujo o objetivo é fornecer informações de produto e disponibilidade do mesmo em lojas físicas próximas. Não estarei criando toda a estrutura e fluxo de uma compra real. O intuito mesmo é apenas mostrar como a minha ideia principal serviria para lidar com diferentes tipos de requisições. Estarei explicando o que cada arquivo faz.

De maneira resumida, meu foco é criar uma função utilitária para chamadas à APIs que também inclua o token de um usuário já autenticado com todas as possíveis verificações e validações, em uma página com server component. Esta seria a estrutura de diretórios do meu projeto next.js(também presente no repositório do git, dentro da pasta "item_3"):

app/\
-- page.tsx\
lib/\
-- api/\
---- fetcher.ts\
---- services/\
------ productService.ts\
------ productAvailabilityService.ts\
middlewares/\
-- auth.ts\
types/\
-- external.d.ts

**app/page.tsx** - Uso prático no server component para a obtenção dos dados. Nota-se que faço múltiplas requisições e com tratamento para casos de erros. Mas também seria possível utilizar a função get dentro do service específico de maneira isolada.

**lib/api/productService.ts** - camada responsável por buscar dados do produto.

**lib/api/productAvailabilityService.ts** - camada responsável por buscar informações de disponibilidade do produto em lojas físicas próximas.

**lib/api/fetcher.ts** - arquivo que contém a funcão principal para chamadas em APIs com tratamento de erros e retornos necessários.

**middlewares/auth.ts** - camada responsável para obtenção do access token do usuário autenticado.

**types/external.d.ts** - arquivo para tipagens

Com essa estratégia, é possível realizar diversas requisições de maneira organizada. Quando houver um novo endpoint, basta apenas criar um novo service respectivo utilizando o "fetcher", que por sua vez ja possui o tratamento dos erros e retorno dos dados, necessários.

OBS: Essa não seria a implementação final dado o cenário fictício. Então trata-se de uma solução inicial bem simples, porém aberta a adaptações futuras e com diversas configurações, estratégias de performance, etc. 








