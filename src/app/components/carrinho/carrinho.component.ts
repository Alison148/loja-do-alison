import { Component } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent {
  carrinho: Produto[] = [];
  formaPagamento: string = 'credito';
  parcelas: number = 1;
  opcoesParcelas: number[] = [1, 2, 3, 4, 5, 6, 10, 12];

  constructor(private service: ProdutoService) {
    this.carrinho = this.service.listarCarrinho();
  }

  total() {
    return this.carrinho.reduce((soma, p) => soma + p.preco, 0);
  }

  finalizarCompra() {
    if (!this.formaPagamento) {
      Swal.fire('Erro', 'Escolha uma forma de pagamento!', 'warning');
      return;
    }

    let msg = `Pagamento via ${this.formaPagamento.toUpperCase()}`;
    if (this.formaPagamento === 'credito') {
      const valorParcela = this.total() / this.parcelas;
      msg += `\nParcelado em ${this.parcelas}x de R$ ${valorParcela.toFixed(2)}`;
    }
    msg += `\nTotal: R$ ${this.total().toFixed(2)}`;

    Swal.fire({
      title: 'Finalizar Compra?',
      text: msg,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim, confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.gerarNotaFiscal();
        this.service.limparCarrinho();
        this.carrinho = [];
        Swal.fire('Sucesso!', 'Compra finalizada com sucesso.', 'success');
      }
    });
  }

  gerarNotaFiscal() {
    const dados = {
      produtos: this.carrinho,
      total: this.total(),
      pagamento: this.formaPagamento,
      parcelas: this.parcelas,
      data: new Date().toLocaleString()
    };

    const conteudo = `
      <div style="font-family: Arial; padding: 20px;">
        <h2 style="text-align: center;">Nota Fiscal</h2>
        <p><strong>Data:</strong> ${dados.data}</p>
        <p><strong>Pagamento:</strong> ${dados.pagamento.toUpperCase()}</p>
        ${
          dados.pagamento === 'credito'
            ? `<p><strong>Parcelado em:</strong> ${dados.parcelas}x de R$ ${(dados.total / dados.parcelas).toFixed(2)}</p>`
            : ''
        }
        <hr/>
        <ul>
          ${dados.produtos.map(p => `<li>${p.nome} - R$ ${p.preco.toFixed(2)}</li>`).join('')}
        </ul>
        <hr/>
        <h4>Total: R$ ${dados.total.toFixed(2)}</h4>
      </div>
    `;

    const janela = window.open('', '_blank');
    if (janela) {
      janela.document.write(`<html><head><title>Nota Fiscal</title></head><body>${conteudo}</body></html>`);
      janela.document.close();
      janela.print();
    }
  }
}
