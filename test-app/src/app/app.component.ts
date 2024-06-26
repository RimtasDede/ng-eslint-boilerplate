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

  a(storage: Storage) {
    console.log(storage);

    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];

    // }

    //aaaa
    const arr1 = [1, 2];
    const arr2 = [
      1,
      2
    ];
    const arr3 = [1,
      2];

    console.log(arr1, arr2, arr3);
    debugger;

    // typeof this.aaa === "string"

    () => 5;
    () => {
      const a = 4;
      return 5 + a;
    };

    const foo = [1, 2, 3];

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
