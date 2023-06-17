import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bollettino } from '../models/Bollettino';
import { Utente } from '../models/Utente';

@Injectable({
  providedIn: 'root'
})
export class PostalpayService {
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }


  public getBollettini(): Observable<Bollettino[]> {
    return this.http.get<Bollettino[]>(`${this.apiServerUrl}/bollettino/all`);
  }
  public getBollettino(id: number): Observable<Bollettino> {
    return this.http.get<Bollettino>(`${this.apiServerUrl}/bollettino/` + id);
  }
  public getUtente(id: number): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiServerUrl}/utente/` + id);
  }
  public addBollettino(bollettino: Bollettino): Observable<Bollettino> {
    return this.http.post<Bollettino>(`${this.apiServerUrl}/insert/bollettino`, bollettino);
  }
  public addUtente(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>(`${this.apiServerUrl}/insert/utente`, utente);
  }
  public addBollettinoPagato(bollettino: Bollettino): Observable<Bollettino> {
    return this.http.put<Bollettino>(`${this.apiServerUrl}/update/bollettino`, bollettino);
  }
  
  private bollettino$ = new BehaviorSubject<any>({});
  selectedBollettino$ = this.bollettino$.asObservable();

  setBollettino(bollettino: Bollettino) {
    this.bollettino$.next(bollettino);
  }

  private utente$ = new BehaviorSubject<any>({});
  selectedUtente$ = this.utente$.asObservable();

  setUtente(utente: Utente) {
    this.utente$.next(utente);
  }
}
