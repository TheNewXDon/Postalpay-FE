import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Bollettino } from 'src/app/models/Bollettino';
import { PostalpayService } from 'src/app/services/postalpay.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  bollettino!: Bollettino;
  payform!: FormGroup;

  constructor(private service: PostalpayService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.service.selectedBollettino$.subscribe(
      data => this.bollettino = data
    )
    if (this.bollettino.cc == null) {
      this.service.getBollettini().subscribe(
        (response: Bollettino[]) => {
          const selected = response[response.length - 1];
          this.bollettino = selected;
          this.service.setBollettino(this.bollettino);
        }
      )  
    }
    this.payform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      codiceCarta: new FormControl(null, Validators.required),
    })
  }

  aggiungiBollettinoPagato(form: FormGroup) {
    this.bollettino.nomeUtente = form.get('nome')?.value;
    this.bollettino.cognomeUtente = form.get('cognome')?.value;
    this.bollettino.codiceCarta = form.get('codiceCarta')?.value;
    this.bollettino.pagato = true;
    this.service.addBollettinoPagato(this.bollettino).subscribe(
      response => {
        console.log('dentro inserimento this.animal.id:' + response.id);
        this.service.setBollettino(response);

        this.router.navigate(["/pagamento/conferma"]);
      }
    )
  }

  onSubmit() {
    this.aggiungiBollettinoPagato(this.payform);
  }

}
