import { Component, VERSION } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;
  public name: string;
  constructor(private testService: TestService) {
    this.name = this.testService.GetMessage('Nour');
  }
}
//export class Test {}
