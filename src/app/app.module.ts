import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';

// ✅ Importações adicionadas sem alterar os existentes
import { AppRoutingModule } from './app-routing.module';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { PdvComponent } from './components/pdv/pdv.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListaComponent,
    ProdutoFormComponent, // ✅ adicionado
    CarrinhoComponent,    // ✅ adicionado
    PdvComponent          // ✅ adicionado
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule      // ✅ adicionado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
