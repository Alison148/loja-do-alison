export interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number; // 🟢 Para controle de estoque
  descricao: string;  // 🟢 Para uso no formulário
}
