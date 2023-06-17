import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bollettino } from 'src/app/models/Bollettino';
import { PostalpayService } from 'src/app/services/postalpay.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  homeform!: FormGroup;
  @Input() bollettino: Bollettino = new Bollettino();
  constructor(private service: PostalpayService, private router: Router) { }

  ngOnInit(): void {
    this.homeform = new FormGroup({
      codiceBollettino: new FormControl(null, Validators.required),
      cc: new FormControl(null, [Validators.required, Validators.maxLength(6), Validators.minLength(6)]),
      importo: new FormControl(null, Validators.required),
      causale: new FormControl(null, Validators.required)
    })
  }

  aggiungiBollettinoDaPagare(form: FormGroup) {
    this.bollettino = this.createBollettino(form);
    this.service.addBollettino(this.bollettino).subscribe(
      response => {
        console.log('dentro inserimento this.animal.id:' + response.id);
        this.service.setBollettino(response);

        this.router.navigate(["/pagamento"]);
      },
      error => {
        console.log(this.bollettino);
        alert("ERRORE! Conto corrente non abilitato oppure codice bollettino duplicato!");
      }
    )
  }

  createBollettino(form: FormGroup): Bollettino {
    const bollettino: Bollettino = new Bollettino();
    bollettino.codiceBollettino = form.get('codiceBollettino')!.value;
    bollettino.cc = form.get('cc')!.value,
    bollettino.importo = form.get('importo')!.value,
    bollettino.causale = form.get('causale')!.value,

    // Usa l'oggetto Bollettino come desideri
    console.log(bollettino);
    return bollettino;
  }

  onSubmit() {
    console.log(this.homeform.value);
    this.aggiungiBollettinoDaPagare(this.homeform)
  }
}
