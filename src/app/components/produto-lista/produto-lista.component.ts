import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html'
})
export class ProdutoListaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtos = this.service.listarProdutos();
  }

  comprar(produto: Produto) {
    this.service.adicionarAoCarrinho(produto);

    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Produto adicionado ao carrinho!',
      timer: 2000,
      showConfirmButton: false
    });

    this.carregarProdutos(); // atualiza lista
  }
}
