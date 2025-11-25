# ⚛️ Tier 2 · Domínio Intermediário

> Objetivo: consolidar hooks intermediários, formulários e padrões de reuso. Execute após dominar Tier 1.

## 9. Controlled Components (Forms)
- **Resumo:** React controla `value` e `onChange`. Estado reflete o campo e vice-versa.
- **Checklist:** `value` sempre definido, converter tipos (`Number(e.target.value)`), tratar `onSubmit`.
- **Exercícios:**
  1. `MovieReviewForm` com rating (0-5) e textarea; limpar campos após submit.
  2. Form de login com validação simples (email obrigatório, senha ≥ 6 chars) mostrando mensagens inline.
  3. Criar formulário multi-step (dados pessoais → endereço) usando estado pra controlar a etapa.

## 10. useRef
- **Resumo:** referência mutável que não dispara render. Ideal para DOM imperativo e armazenar IDs de intervalos.
- **Checklist:** inicializar com `null`, lembrar de `current`, limpar intervalos.
- **Exercícios:**
  1. `SearchInput` com botão “Focus” chamando `inputRef.current.focus()`.
  2. Timer com `start/stop/reset` salvando `intervalId` em ref.
  3. Guardar valor anterior de uma prop sem re-render (ex.: `previousQueryRef`).

## 11. Custom Hooks
- **Resumo:** funções que usam hooks e começam com `use`. Extraem lógica compartilhada.
- **Checklist:** nome `useX`, documentar retorno, tratar loading/error.
- **Exercícios:**
  1. `useMovies` que busca filmes e expõe `{ movies, loading, error }`.
  2. `useDebounce(value, delay)` que retorna valor debounced.
  3. `useToggle(initial)` para abstrair booleano com `on/off/toggle`.

## 12. Context API
- **Resumo:** estado global leve. Criar context, provider e hook `useX`. Use para dados consumidos amplamente.
- **Checklist:** provider no nível correto, evitar re-render desnecessário (memoizar value), tratar erro se hook usado fora do provider.
- **Exercícios:**
  1. `AuthContext` com `{ user, login, logout }` + `useAuth` hook.
  2. `ThemeContext` com toggle dark/light e persistência em `localStorage`.
  3. Refatorar props drilling de 3 níveis para contexto.

## 13. React Native Essentials
- **Resumo:** trocar tags HTML por componentes RN (`View`, `Text`, `TouchableOpacity`, `Image`). Estilização via `StyleSheet` ou NativeWind.
- **Checklist:** lembrar que não existe DOM, usar `style` ou classes NativeWind, importar de `react-native`.
- **Exercícios:**
  1. Converter `MovieCard` web para RN usando NativeWind.
  2. Criar `ReviewList` com `FlatList` e `keyExtractor`.
  3. Implementar botão que navega usando `useNavigation` (Expo/React Navigation) e props.

## 14. useMemo & useCallback
- **Resumo:** memoiza valores e funções caros para evitar recalcular/recriar.
- **Checklist:** somente quando necessário, dependências corretas, não usar pra tudo.
- **Exercícios:**
  1. `MovieList` filtrando por gênero com `useMemo` (log para conferir execuções).
  2. `handleLike` memorizado com `useCallback` e passado para `MovieCard` memoizado.
  3. Simular busca pesada (ex.: ordenar lista grande) e medir diferença com/sem memo usando console.time.

## 15. React.memo
- **Resumo:** memoiza componente para re-render apenas se props mudarem (shallow compare).
- **Checklist:** exportar com `memo`, garantir props estáveis, combinar com `useCallback`.
- **Exercícios:**
  1. Criar `MovieCard` memoizado e demonstrar logs de render antes/depois.
  2. Usar memo em lista longa (100 items) e medir performance com React DevTools Profiler.
  3. Criar comparação de props customizada (`memo(Component, areEqual)`).

---
### Missão Sprint (Semana 3-4)
1. Reescreva 3 componentes do CINELOG usando custom hooks + contexto.
2. Adicione formulário controlado completo (validação + feedback).
3. Adicione otimizações básicas (`memo`, `useCallback`, `useMemo`).
4. Registrar aprendizados em log diário (lógica, dificuldade, tempo gasto).
