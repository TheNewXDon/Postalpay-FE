import { Component, OnInit } from '@angular/core';
import { Bollettino } from 'src/app/models/Bollettino';
import { PostalpayService } from 'src/app/services/postalpay.service';

@Component({
  selector: 'app-conferma',
  templateUrl: './conferma.component.html',
  styleUrls: ['./conferma.component.css']
})
export class ConfermaComponent implements OnInit {
  bollettino!: Bollettino;

  constructor(private service: PostalpayService) { }

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
  }

}
