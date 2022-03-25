import { Injectable } from '@angular/core';
@Injectable()
export class TestService {
  public GetMessage(cognome: string): string {
    return 'your last name is' + cognome + ' your first name is';
  }
}
