# ⚛️ Tier 1 · Fundamentos INEGOCIÁVEIS

> Objetivo: dominar os 8 blocos obrigatórios para conseguir montar qualquer tela React sem depender de IA. Cada macro-seção tem: resumo rápido, checklist mental e exercícios.

## 1. Componentes Funcionais
- **Resumo:** tudo em React é componente. Use funções (arrow ou declaration) e retorno JSX.
- **Checklist:** export default | nome PascalCase | props desestruturadas.
- **Exercícios:**
  1. Crie `MovieCard.jsx` com versão function e arrow retornando o mesmo layout.
  2. Transforme 3 trechos HTML existentes em componentes reutilizáveis (Header, Poster, Footer).
  3. Refatore um componente com +200 linhas separando em subcomponentes.

## 2. JSX (HTML + JS)
- **Resumo:** mistura marcação com lógica. Usa chaves para JS, `className`, `htmlFor` e fecha tags.
- **Checklist:** não esquecer keys, não colocar statements longos dentro do JSX.
- **Exercícios:**
  1. Monte um `Profile.jsx` com greeting, condicional de admin, ternário para idade, lista de filmes e botão com `console.log`.
  2. Reescreva qualquer template estático em JSX válido (inclua comentários `{/* ... */}`).
  3. Diagnostic: pegue um bug comum (usar `class`) e corrija.



## 4. useState
- **Resumo:** par `[valor, setValor]` causa re-render ao atualizar. Nunca muta diretamente.
- **Checklist:** inicialize com tipo correto, use updater function quando depender do valor anterior.
- **Exercícios:**
  1. `Counter` com botões +1, -1, reset.
  2. `MovieRating` com 5 botões estrela (usa array `[1..5]`).
  3. Forme um mini-like dentro de `MovieCard` com estado local `isLiked`.

## 5. useEffect
- **Resumo:** lida com efeitos colaterais. Sempre pensar quando executar (deps array) e cleanup.
- **Checklist:** dependências completas, declarar funções async dentro, limpar timers/listeners.
- **Exercícios:**
  1. Buscar filme por `movieId` (loading/error state) e mostrar skeleton enquanto carrega.
  2. Criar timer que loga `tick` e limpa no unmount.
  3. Implementar fetch simulado com `setTimeout` e cancelar ao desmontar.

## 6. Event Handlers
- **Resumo:** funções disparadas por eventos DOM. Recebem `event`, use `preventDefault` em formulários.
- **Checklist:** naming `handleX`, usar inline apenas para callbacks simples.
- **Exercícios:**
  1. `LoginForm` controlado com submit que loga email/senha.
  2. Lista de filmes com botão `Like` chamando `handleLike(movie.id)` via arrow inline.
  3. Criar input que chama `handleSearch` no `onKeyDown` quando tecla Enter.

## 7. Renderização Condicional
- **Resumo:** combine `if`, ternário, `&&` e early return pra estados loading/error.
- **Checklist:** preferir early return pra loading/error, evitar ternários aninhados.
- **Exercícios:**
  1. `MovieDetails` com early return para `loading`, `error` e `!movie`.
  2. `Profile` que mostra badge premium usando `&&` e fallback com ternário.
  3. Simule componente que retorna `<EmptyState />` se lista vazia, senão `<MovieList />`.

## 8. Listas & Keys
- **Resumo:** `map` é rei. Keys estáveis (id) pra cada item.
- **Checklist:** nunca usar index (exceto lista estática), extrair item em componente filho.
- **Exercícios:**
  1. Renderizar 10 filmes com `MovieCard` e `key={movie.id}`.
  2. Criar tabela com `key` no `<tr>` e demonstrar bug quando usa index (troque ordem pra ver glitch).
  3. Transformar array de reviews em componente `ReviewList` reutilizável.

---
### Sprint de Prática (2 dias)
1. Recrie uma tela do CINELOG só com conceitos Tier 1.
2. Checklist diário: ✅ componente com props, ✅ lista, ✅ evento que muda estado, ✅ condicional.
3. Sem bibliotecas extras, apenas React + CSS.
