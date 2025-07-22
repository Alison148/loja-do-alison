import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';
import { ProdutoListaComponent } from './components/produto-lista/produto-lista.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoFormComponent,
    ProdutoListaComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
