import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent {
  carrinho: Produto[] = [];

  constructor(private service: ProdutoService, private router: Router) {
    this.carrinho = this.service.listarCarrinho();
  }

  total() {
    return this.carrinho.reduce((soma, p) => soma + (p.preco * (p.quantidade || 1)), 0);
  }

  enviarParaPdV() {
    if (this.carrinho.length === 0) {
      Swal.fire('Aviso', 'O carrinho está vazio!', 'info');
      return;
    }

    this.service.enviarParaPdV(this.carrinho);
    Swal.fire('Enviado!', 'Produtos enviados para o PDV.', 'success').then(() => {
      this.router.navigate(['/pdv']);
    });
  }
}
