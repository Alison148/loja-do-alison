import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { PdvComponent } from './components/pdv/pdv.component';


const routes: Routes = [
  { path: '', component: ProdutoListaComponent },
  { path: 'cadastrar', component: ProdutoFormComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'pdv', component: PdvComponent } // ✅ vírgula corrigida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
