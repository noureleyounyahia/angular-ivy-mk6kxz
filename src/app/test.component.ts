import { Component } from '@angular/core';
import { Test2Service } from './test2.service';

@Component({
  selector: 'test-component',
  template:
    'Sono il componente per stampare per stampare i tuoi dati. {{cognome}}',
  styleUrls: ['message.component.css'],
})
export class TestComponent {
  public cognome: string;
  constructor(private test2Service: Test2Service) {
    this.cognome = this.test2Service.GetMessage('Elrefay');
  }
}
