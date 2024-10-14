# Calculadora em React

Uma **calculadora simples e moderna** desenvolvida em **React**. Este projeto implementa funcionalidades básicas e avançadas de cálculo, permitindo aos usuários realizar operações matemáticas de forma rápida e intuitiva.

## Funcionalidades

- **Operações Básicas**:
  - Adição (+)
  - Subtração (−)
  - Multiplicação (×)
  - Divisão (÷)
- **Operações Avançadas**:
  - Porcentagem (%)
  - Inversão de sinal (+/−)
  - Raiz quadrada (√x)
  - Elevar ao quadrado (x²)
  - Inverso (⅟x)

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Styled-components**: Biblioteca para estilização de componentes.
- **JavaScript**: Linguagem de programação utilizada para a lógica de cálculo.

## Estrutura do Projeto

```plaintext
nome-do-repositorio/
├── public/
│   ├── index.html           # Arquivo HTML principal
│   └── favicon.ico          # Ícone do aplicativo
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Button/          # Componente de botão
│   │   │   ├── button-index.js  # Lógica do botão
│   │   │   └── button-style.js  # Estilização do botão
│   │   ├── Input/           # Componente de input
│   │   │   ├── input-index.js   # Lógica do input
│   │   │   └── input-style.js   # Estilização do input
│   ├── App.js               # Componente principal da aplicação
│   ├── global.js            # Estilos globais e temas
│   ├── index.js             # Ponto de entrada da aplicação
│   ├── styles.js            # Estilo global (reset, etc.)
├── .gitignore                # Ignorar arquivos no git
├── package.json              # Dependências e scripts do projeto
└── README.md                 # Documentação do projeto

## Como Usar

## Clone o Repositório
```plaintext
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
npm install
npm start
```plaintext
npm install
Inicie a Aplicação
```plaintext
npm start
Acesse no Navegador Abra http://localhost:3000 para ver a aplicação em funcionamento.