module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    // Regras personalizadas:
    'no-console': 'warn', // Evita o uso de console.log() e outros métodos do console.
    'no-unused-vars': 'warn', // Avisa sobre variáveis declaradas que não são utilizadas.
    'no-undef': 'error', // Impede o uso de variáveis não declaradas.
    'no-restricted-globals': ['error', 'fetch'], // Impede o uso da palavra-chave "fetch" (não utilizada em Node.js).
    'no-var': 'error', // Prefira "let" e "const" em vez de "var".
    'prefer-const': 'error', // Prefira a declaração "const" para variáveis que não precisam ser reatribuídas.
    'prefer-arrow-callback': 'error', // Prefira a sintaxe de arrow function em callbacks de funções.
  },
};
