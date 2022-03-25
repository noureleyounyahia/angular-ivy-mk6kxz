import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[test-directive]',
})
export class TestDirective implements OnInit {
  constuctor(private element: ElementRef<HTMLElement>) {}
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColore = 'red';
  }
}
