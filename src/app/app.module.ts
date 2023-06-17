import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { UscitaComponent } from './components/uscita/uscita.component';
import { ConfermaComponent } from './components/conferma/conferma.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PagamentoComponent,
    UscitaComponent,
    ConfermaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
