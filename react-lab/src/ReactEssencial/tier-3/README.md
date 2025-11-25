# ⚛️ Tier 3 · Diferencial (Nice to Have)

> Use depois de dominar Tiers 1 e 2. Aqui estão recursos avançados que elevam seu app.

## 16. Error Boundaries
- **Resumo:** componentes classe que capturam erros de renderização dos filhos.
- **Checklist:** estado `hasError`, `getDerivedStateFromError`, `componentDidCatch`.
- **Exercícios:**
  1. Implemente `ErrorBoundary` e encapsule lista de filmes.
  2. Forçe um erro num filho para validar fallback customizado.
  3. Crie fallback com botão "Tentar de novo" que reseta estado.

## 17. Portals
- **Resumo:** renderizam filhos fora da árvore DOM atual (modais, tooltips).
- **Checklist:** `createPortal(children, container)`, lidar com foco/aria.
- **Exercícios:**
  1. Criar `Modal` simples usando portal para `document.body`.
  2. Reutilizar modal para confirmar exclusão em lista.
  3. Adicionar trap de foco e fechar com `Esc`.

## 18. Lazy Loading & Suspense
- **Resumo:** divide o bundle em chunks carregados sob demanda (`lazy` + `Suspense`).
- **Checklist:** fallback acessível, tratar boundaries por rota/componente.
- **Exercícios:**
  1. Lazy load em `MovieDetails` com fallback `Loading...`.
  2. Criar rota com `React Router` usando `lazy`/`Suspense` por página.
  3. Medir bundle size antes/depois (usando `npm run build --report`).

---
### Projetão Final (Semana 5-6)
1. Adicione Error Boundary global + específicos (ex.: área de reviews).
2. Implemente modal de criação/edição usando portal.
3. Quebre páginas pesadas em chunks com lazy loading.
4. Use React Profiler para garantir que otimizações dos Tiers anteriores se mantiveram.
