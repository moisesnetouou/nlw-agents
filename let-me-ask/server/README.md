# NLW Agents

Este projeto foi desenvolvido durante o evento **NLW (Next Level Week) da Rocketseat**.

## Descrição

API backend para gerenciamento de salas, utilizando Fastify, Drizzle ORM e PostgreSQL.

## Principais Tecnologias e Bibliotecas

- **[Fastify](https://fastify.dev/):** Framework web para Node.js, focado em performance.
- **[Drizzle ORM](https://orm.drizzle.team/):** ORM para TypeScript, utilizado para manipulação do banco de dados PostgreSQL.
- **[Zod](https://zod.dev/):** Validação de esquemas e tipos.
- **[fastify-type-provider-zod](https://github.com/fastify/fastify-type-provider-zod):** Integração de validação de tipos com Fastify.
- **[PostgreSQL](https://www.postgresql.org/):** Banco de dados relacional.
- **[drizzle-kit](https://orm.drizzle.team/docs/cli):** Ferramenta de migrations para Drizzle ORM.
- **[drizzle-seed](https://github.com/arthurfiorette/drizzle-seed):** Utilitário para popular o banco de dados com dados fictícios.
- **[@fastify/cors](https://github.com/fastify/fastify-cors):** Middleware para CORS.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para JavaScript.

## Padrões de Projeto e Arquitetura

- **Separação de responsabilidades:** Código organizado em módulos (`db`, `http/routes`, `schema`).
- **Schema-first:** Definição de entidades e validação via Zod e Drizzle ORM.
- **Uso de plugins do Fastify** para modularização das rotas.

## Setup e Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) para o banco de dados PostgreSQL

### 1. Clone o repositório

```bash
git clone <url-do-repo>
cd let-me-ask/server
```

### 2. Suba o banco de dados com Docker

```bash
docker-compose up -d
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com:

```
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
PORT=3333
```

### 4. Instale as dependências

```bash
npm install
```

### 5. Rode as migrations do banco de dados

Execute as migrations com o Drizzle Kit:

```bash
npx drizzle-kit migrate
```

### 6. Popule o banco com dados fictícios (opcional)

```bash
npm run db:seed
```

### 7. Inicie o servidor em modo desenvolvimento

```bash
npm run dev
```

A API estará disponível em `http://localhost:3333`. 