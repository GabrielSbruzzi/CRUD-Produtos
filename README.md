# 📦 CRUD Produto

Este é um pequeno repositório de produtos desenvolvido em JavaScript puro, com operações básicas de CRUD (Create, Read, Update, Delete) e testes automatizados utilizando Jest.

## 🛠️ Funcionalidades

- ✅ Inserção de produtos
- 🔍 Busca por ID
- 📜 Listagem de todos os produtos
- ♻️ Atualização de produtos
- ❌ Exclusão de produtos
- 🔎 Filtros por categoria
- 🔍 Busca por nome parcial
- 📄 Tratamento de erros via camada service

## 📁 Estrutura

- `repository/produto_repository.js`: Lida com o armazenamento dos produtos em memória. Contém toda a lógica de persistência (CRUD e filtros).
- `service/produto_service.js`: Camada de serviço que realiza validações e tratamento de erros antes de acessar o repositório.
- `produto.test.js`: Testes automatizados com Jest para garantir o comportamento correto do repositório.

## 🧱 Camadas

O projeto segue uma estrutura de separação por responsabilidade:

- **Repository**: Acesso direto à fonte de dados (aqui, memória).
- **Service**: Regras de negócio e validações (como lançar erros se dados forem inválidos ou inexistentes).

---

## 📦 Requisitos

- Node.js (v14 ou superior)
- npm (ou yarn)

---

## 🚀 Como executar

1. Clone o repositório:

```bash
git clone https://github.com/GabrielSbruzzi/CRUD-Produtos.git
```

2. Instale as dependências:

```bash
npm install
```

3. Execute os testes:

```bash
npm test
```

---

## 📊 Cobertura de Testes (Coverage)

Para gerar um relatório de cobertura dos testes com o Jest, execute:

```bash
npm test -- --coverage
```

O relatório será exibido no terminal e salvo na pasta `coverage/`.

Você verá uma saída semelhante a esta:

```
---------------------|---------|----------|---------|---------|
File                 | % Stmts | % Branch | % Funcs | % Lines |
---------------------|---------|----------|---------|---------|
produto_repository.js|   100   |   100    |   100   |   100   |
---------------------|---------|----------|---------|---------|
```

💡 **Dica:** Para visualizar o relatório HTML completo, abra o arquivo `coverage/lcov-report/index.html` no navegador.

---

## 🧪 Sobre os Testes

Os testes cobrem os seguintes cenários:

- Inserção de produtos válidos e inválidos
- Listagem de produtos
- Busca por ID
- Atualização de produtos
- Exclusão
- Filtros por categoria e nome

---

## 📌 Observações

- O repositório de produtos é mantido apenas em memória.
- Útil para fins de aprendizado, testes ou simulação de backend simples.
- O `produto_service.js` pode ser facilmente integrado com uma API (ex: Express.js), recebendo e tratando requisições HTTP.

---

## 📝 Licença

Este projeto está licenciado sob a licença MIT.
