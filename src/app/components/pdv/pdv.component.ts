import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/produto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html'
})
export class PdvComponent implements OnInit {
  operador = 'Alison Antunes';
  dataHoje = new Date().toLocaleDateString();
  carrinho: Produto[] = [];
  formaPagamento = 'dinheiro';
  parcelas = 1;
  opcoesParcelas = [1, 2, 3, 4, 6, 10, 12];
  valorRecebido = 0;
  fundoDeCaixa = 100;
  desconto = 0;
  acrescimo = 0;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.carrinho = this.produtoService.listarCarrinho();
  }

  totalSemDescontos(): number {
    return this.carrinho.reduce((total, p) => total + p.preco * p.quantidade, 0);
  }

  totalFinal(): number {
    return this.totalSemDescontos() - this.desconto + this.acrescimo;
  }

  valorParcela(): number {
    return this.formaPagamento === 'credito' ? this.totalFinal() / this.parcelas : this.totalFinal();
  }

  calcularTroco(): number {
    if (this.formaPagamento === 'dinheiro') {
      return this.valorRecebido - this.totalFinal();
    }
    return 0;
  }

  editarQuantidade(item: Produto, novaQtd: number) {
    if (novaQtd <= 0) {
      this.removerItem(item);
    } else {
      item.quantidade = novaQtd;
    }
  }

  removerItem(item: Produto) {
    this.carrinho = this.carrinho.filter(p => p !== item);
  }

  finalizarCompra() {
    if (!this.formaPagamento) {
      Swal.fire('Erro', 'Escolha a forma de pagamento', 'warning');
      return;
    }

    // Atualiza estoque
    this.carrinho.forEach(item => {
      this.produtoService.baixarEstoque(item.id, item.quantidade);
    });

    Swal.fire('Compra Finalizada!', 'Nota Fiscal disponível para impressão.', 'success');
    this.produtoService.registrarVenda({
      data: new Date(),
      itens: this.carrinho,
      total: this.totalFinal(),
      pagamento: this.formaPagamento,
      operador: this.operador
    });

    this.produtoService.limparCarrinho();
    this.ngOnInit(); // Atualiza carrinho
  }

  imprimirNotaFiscal() {
    const area = document.getElementById('notaFiscal');
    if (area) {
      const printWin = window.open('', '_blank');
      printWin!.document.write('<html><head><title>Nota Fiscal</title></head><body>');
      printWin!.document.write(area.innerHTML);
      printWin!.document.write('</body></html>');
      printWin!.document.close();
      printWin!.print();
    }
  }
}
