import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class serverComponent {
  /**
   * @type {string}
   * @memberof serverComponent
   */
  red: string = 'red';

  /**
   * Creates an instance of serverComponent.
   * @memberof serverComponent
   */
  constructor() {
    setTimeout(() => {
      this.red = 'blue';
    }, 4000);
  }
}
