import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private fakeLoad = true;

  constructor() {
    setTimeout(() => {
      this.fakeLoad = false;
    }, 3000);
  }

  get loading() {
    return this.fakeLoad;
  }
}
