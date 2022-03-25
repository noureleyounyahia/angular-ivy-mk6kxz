import { NgModule } from '@angular/cor';
import { TestComponent } from './test.component';
@NgModule({
  declerations: [TestComponent],
  exports: [TestComponent],
})
export class TestModule {}
