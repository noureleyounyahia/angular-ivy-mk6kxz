import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestService, TryService } from './test.service';
import { TestDirective } from './test.directive';
import { InfoComponent } from './info.component';

@NgModule({
  imports: [BrowserModule, FormsModule, TestModule],
  declarations: [AppComponent, HelloComponent, TestDirective],
  providers: [TestService, TryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
