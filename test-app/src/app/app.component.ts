import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @typescript-eslint/array-type
  aaa: string[] = [];
  aaa1: Array<string> = []; // err

  a() {
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];

    // }

    debugger;

    // typeof this.aaa === "string"

    () => 5;
    () => {
      const a = 4;
      return 5 + a;
    };

    const foo = [1,2,3];

    for (const i in foo) {
      console.log(i);
    }

    for (const i in foo) {
    }

    // this.defaultParm(1, ,5);
  }

  defaultParm(a: number, b = false, c: number) {
    return a || b || c;
  }
}
