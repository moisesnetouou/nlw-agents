# NLW Agents

Este projeto foi desenvolvido durante o evento NLW da Rocketseat.

## Tecnologias e Bibliotecas Utilizadas
- **React 19**
- **TypeScript**
- **Vite** (build tool)
- **TailwindCSS** (utilitário de estilos)
- **React Router DOM** (roteamento)
- **@tanstack/react-query** (gerenciamento de dados assíncronos)
- **Lucide React** (ícones)
- **@radix-ui/react-slot** (composição de componentes)
- **class-variance-authority, clsx, tailwind-merge** (utilitários para composição de classes CSS)

## Padrões de Projeto e Organização
- Organização baseada em pastas `pages` (páginas/rotas), `components` (componentes reutilizáveis) e `lib` (utilitários).
- Componentes de UI ficam em `src/components/ui`.
- Utilização de React Router para navegação.
- Gerenciamento de estado assíncrono com React Query.
- Estilização com TailwindCSS e animações com `tw-animate-css`.
- Alias de importação configurados para facilitar o acesso aos diretórios principais (`@/components`, `@/lib`, etc).

## Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repo>
   cd let-me-ask/web
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Rode o projeto em modo desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Acesse:**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## Scripts Disponíveis
- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a build de produção
- `npm run preview` — Visualiza a build de produção localmente

---
Projeto desenvolvido durante o evento NLW da Rocketseat. 