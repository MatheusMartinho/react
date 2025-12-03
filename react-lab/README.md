# React + Vite (Bun)

This app now uses [Bun](https://bun.sh) as the package manager/runtime while keeping the same Vite + React setup.

## Requisitos

- Bun >= 1.1.0 instalado (`curl -fsSL https://bun.sh/install | bash`)

## Instalação e scripts

```sh
bun install
bun run dev      # inicia o Vite em modo desenvolvimento
bun run build    # build de produção
bun run lint     # lint com ESLint
bun run preview  # preview local do build
```

A configuração do React Compiler continua desativada (veja a [documentação](https://react.dev/learn/react-compiler/installation) se quiser habilitar). Para regras de lint mais rígidas em produção, considere migrar para TypeScript com `typescript-eslint`.
