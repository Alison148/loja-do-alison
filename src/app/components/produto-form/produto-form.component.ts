import { Component } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html'
})
export class ProdutoFormComponent {
  produto: Produto = { id: 0, nome: '', preco: 0, descricao: '', quantidade: 1 };

  constructor(private service: ProdutoService) {}

  salvar() {
    this.service.adicionarProduto(this.produto);
    alert('Produto cadastrado!');
    this.produto = { id: 0, nome: '', preco: 0, descricao: '', quantidade: 1 };
  }
}
