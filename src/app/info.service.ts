import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {
  public GetMessage(): Info[] {
    return [{ nome: 'nour', cognome: 'elrefay', temperatura: 23 }];
  }
}

export class Info {
  nome: string;
  cognome: string;
  temperatura: number;
}
