Finny Finance 
O Finny Finance é um administrador de finanças pessoais leve e intuitivo, desenvolvido para rodar localmente no computador. O projeto utiliza Node.js no backend para manipular dados em arquivos JSON e uma interface moderna em HTML/CSS no frontend.

🚀 Funcionalidades
Registro de Transações: Adicione receitas e despesas com descrição, valor e categoria.

Dashboard Inteligente: Visualização em tempo real do Saldo Total, Entradas e Saídas.

Persistência Local: Seus dados são salvos em um arquivo financas.json no seu próprio disco rígido.

Interface Dark Mode: Design focado em usabilidade e conforto visual.

🛠️ Tecnologias Utilizadas
Frontend: HTML5, CSS3 e JavaScript Vanilla.

Backend: Node.js com o framework Express.

Banco de Dados: Arquivo JSON local processado pelo módulo fs (File System).

Segurança de IDs: Biblioteca uuid para garantir que cada transação seja única.

📂 Estrutura de Pastas
Plaintext
Finny Finance/
├── data/
│   └── financas.json      # Onde os dados são armazenados
├── src/
│   ├── index.js           # Servidor e rotas da API
│   └── utils.js           # Funções de apoio
├── index.html             # Interface do usuário
├── style.css              # Estilização (Dark Mode)
├── .gitignore             # Arquivo para não subir lixo para o Git
└── package.json           # Dependências e scripts do projeto
⚙️ Como Rodar o Projeto
Clone o repositório:

Bash
git clone https://github.com/KaueMata/FinnyFinance.git
Instale as dependências:

Bash
npm install
Inicie o servidor:

Bash
node src/index.js
Acesse no navegador:
Abra http://localhost:3000

Aprendizados (O que eu estudei aqui)
Neste projeto, apliquei conceitos fundamentais de desenvolvimento Full Stack:

Comunicação Cliente-Servidor: Como o navegador envia dados para o servidor via métodos HTTP (POST, GET, DELETE).

Manipulação de JSON: Como ler e escrever arquivos de texto para simular um banco de dados.

Gestão de Dependências: Uso do NPM para gerenciar bibliotecas externas.

Versionamento: Uso do Git para controle de histórico e backup no GitHub.
