import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PagamentoComponent } from './components/pagamento/pagamento.component';
import { UscitaComponent } from './components/uscita/uscita.component';
import { ConfermaComponent } from './components/conferma/conferma.component';

const routes: Routes = [
  {path:"", component: IndexComponent},
  {path:"index", component: IndexComponent},
  {path:"pagamento", component: PagamentoComponent},
  {path:"pagamento/uscita", component: UscitaComponent},
  {path:"pagamento/conferma", component: ConfermaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
