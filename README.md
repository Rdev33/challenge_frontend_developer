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