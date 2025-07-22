import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html'
})
export class ProdutoListaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.produtos = this.service.listarProdutos();
  }

  comprar(produto: Produto) {
    this.service.adicionarAoCarrinho(produto);
    alert('Adicionado ao carrinho!');
  }
}
