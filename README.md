# 🛒 Loja Angular - Sistema de Vendas

Este é um sistema de loja virtual desenvolvido com **Angular 17** que permite cadastro de produtos, gerenciamento de carrinho de compras, múltiplas formas de pagamento (crédito, débito, Pix e boleto), e geração de nota fiscal com impressão.

---

## 🚀 Funcionalidades

- ✅ Cadastro de produtos com nome, descrição, preço e quantidade.
- ✅ Listagem dos produtos disponíveis com botão "Adicionar ao Carrinho".
- ✅ Carrinho de compras com:
  - Listagem dos produtos adicionados;
  - Cálculo automático do subtotal e total;
  - Atualização da quantidade em tempo real;
  - Remoção de itens.
- ✅ Finalização de compra com:
  - Formas de pagamento: Crédito, Débito, Pix e Boleto;
  - Parcelamento no crédito com exibição de parcelas;
  - Alertas de confirmação com **SweetAlert2**.
- ✅ Impressão de Nota Fiscal.
- ✅ Visual moderno com Bootstrap 5.

---

## 🧰 Tecnologias Utilizadas

- Angular 17
- TypeScript
- Bootstrap 5
- SweetAlert2

---

## ▶️ Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/alison148/loja-angular.git
Navegue até a pasta do projeto:

bash
Copiar
Editar
cd loja-angular
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie o servidor Angular:

bash
Copiar
Editar
ng serve
Acesse no navegador:

arduino
Copiar
Editar
http://localhost:4200
📂 Estrutura de Pastas
css
Copiar
Editar
src/
├── app/
│   ├── components/
│   │   ├── produto-form/
│   │   ├── carrinho/
│   │   └── produto-lista/
│   ├── models/
│   │   └── produto.model.ts
│   ├── services/
│   │   └── produto.service.ts
│   └── app-routing.module.ts
├── assets/
└── index.html
📸 Capturas de Tela
🧾 Cadastro de Produto
Formulário com campos para nome, descrição, preço e quantidade.

🛍️ Lista de Produtos
Botão de adicionar ao carrinho com controle de estoque.

🛒 Carrinho
Exibição de subtotal, total e quantidade.

💳 Finalização
Seleção de forma de pagamento, parcelamento e alerta SweetAlert2.

✍️ Autor
Desenvolvido por Alison Antunes
🔗 GitHub: github.com/alison148

