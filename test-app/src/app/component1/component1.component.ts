import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.scss'
})
export class Component1Component {
  private a = 1;

  constructor(
    private aaa: ElementRef,
  ) {
    // this.aaa.nativeElement.focus();
  }

  aab() {
    // this.aaa.nativeElement.focus();
  }
}
