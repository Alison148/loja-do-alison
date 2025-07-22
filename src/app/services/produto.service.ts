import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private produtos: Produto[] = [];
  private carrinho: Produto[] = [];

  adicionarProduto(produto: Produto) {
    produto.id = this.produtos.length + 1;
    this.produtos.push(produto);
  }

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinho.push(produto);
  }

  listarCarrinho(): Produto[] {
    return this.carrinho;
  }

  limparCarrinho() {
    this.carrinho = [];
  }

  finalizarCompra(): void {
    const carrinho = this.listarCarrinho();
    for (const item of carrinho) {
      const produto = this.produtos.find(p => p.id === item.id);
      if (produto) {
        produto.quantidade -= 1;
      }
    }
    // remove produtos com estoque 0
    this.produtos = this.produtos.filter(p => p.quantidade > 0);
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
    localStorage.removeItem('carrinho');
  }
}
