import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [];
  private carrinho: Produto[] = [];
  private vendas: any[] = [];

  // Produtos
  listarProdutos(): Produto[] {
    return this.produtos.filter(p => p.quantidade > 0);
  }

  adicionarProduto(produto: Produto) {
    const existente = this.produtos.find(p => p.id === produto.id);
    if (!existente) {
      this.produtos.push(produto);
    } else {
      existente.quantidade += produto.quantidade;
    }
  }

  baixarEstoque(id: number, qtd: number) {
    const prod = this.produtos.find(p => p.id === id);
    if (prod && prod.quantidade >= qtd) {
      prod.quantidade -= qtd;
    }
  }

  // Carrinho
  adicionarAoCarrinho(produto: Produto) {
    const existente = this.carrinho.find(p => p.id === produto.id);
    if (existente) {
      existente.quantidade += 1;
    } else {
      this.carrinho.push({ ...produto, quantidade: 1 });
    }
  }

  listarCarrinho(): Produto[] {
    return this.carrinho;
  }

  limparCarrinho() {
    this.carrinho = [];
  }

  enviarParaPdV(produtos: Produto[]) {
    this.carrinho = produtos;
  }

  // Vendas
  registrarVenda(venda: any) {
    this.vendas.push(venda);
  }

  listarVendas(): any[] {
    return this.vendas;
  }
}
