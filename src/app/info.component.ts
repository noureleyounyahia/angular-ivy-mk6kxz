import { ThisReceiver } from '@angular/compiler/src/expression_parser/ast';
import { Component } from '@angular/core';
import { Info, InfoService } from './Info.service';

@Component({
  selector: 'Info',
  templateUrl: 'info.component.html',
})
export class InfoComponent {
  riga: Array<Info>;
  constructor(private Infoservice: InfoService) {
    this.riga = this.infoservice.GetMessage();
  }
}
