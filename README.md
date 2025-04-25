# Aplicativo de Loja
## Estrutura de telas do aplicativo

```bash
Main Stack
├── Index
├── (tabs)
│   ├── Inicio
│   └── Stack Categorias
│       ├── Listagem de categorias
│       └── Listagem de produtos de uma categoria 
└── Produto Único
```

## Comandos utilizados durante o projeto

```bash
npx create-expo-app --template blank-typescript
cd nome-do-app
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
npx expo start -c
```