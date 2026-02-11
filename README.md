🍔 DevBurguer API - Gerenciamento de Pedidos
Esta é a API robusta que sustenta o ecossistema DevBurguer. Ela foi desenvolvida para lidar com o fluxo completo de uma hamburgueria, desde a autenticação de usuários até o processamento de pedidos complexos.

🛠️ Tecnologias e Ferramentas
O projeto utiliza uma stack moderna focada em performance e organização de dados:


Node.js: Ambiente de execução para o desenvolvimento de APIs escaláveis.
+2

Sequelize (ORM): Utilizado para a gestão e modelagem de dados SQL, com suporte total a migrações e sementes (seeds) através do arquivo .sequelizerc.


Bancos de Dados: Integração com PostgreSQL/MySQL (SQL) e MongoDB (NoSQL) para garantir persistência eficiente de dados.
+2


Docker: Conteinerização da aplicação e dos bancos de dados para garantir um ambiente de desenvolvimento padronizado.
+1

Nodemon: Configurado via nodemon.json para proporcionar um fluxo de desenvolvimento contínuo com hot-reload.

📏 Padrões de Qualidade de Código
Para garantir um código limpo, sustentável e pronto para o trabalho em equipe, a API segue rigorosos padrões:

ESLint: Configuração avançada via eslint.config.mjs e eslintrc.json para identificar e corrigir problemas de sintaxe e padrões de código automaticamente.

Prettier: Formatação de código padronizada através do .prettierrc.json.

Gestão de Dependências: Uso otimizado de package.json e yarn.lock para garantir o controle exato das versões das bibliotecas.

🚀 Como Executar o Backend
Clone o repositório:

Bash
git clone https://github.com/cassiano022/devburguer-api.git
Instale as dependências:

Bash
yarn install
Configure o Banco de Dados:
Certifique-se de que suas credenciais estão corretas e execute as migrações:

Bash
npx sequelize-cli db:migrate
Inicie o servidor:

Bash
yarn dev
