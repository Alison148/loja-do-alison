import { Component } from '@angular/core';
import { Produto } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html'
})
export class ProdutoFormComponent {
  produto: Produto = { id: 0, nome: '', preco: 0, descricao: '', quantidade: 1 };

  constructor(private service: ProdutoService) {}

  salvar() {
    this.service.adicionarProduto(this.produto);
    Swal.fire({
      icon: 'success',
      title: 'Sucesso',
      text: 'Produto cadastrado com sucesso!',
      timer: 2000,
      showConfirmButton: false
    });
    this.produto = { id: 0, nome: '', preco: 0, descricao: '', quantidade: 1 };
  }
}
