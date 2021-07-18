import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userName: string = 'Test user name';
  title = 'This is my first Angulat App !';
  message: string = '';

  testComponents: Array<string> = [];

  ngOnInit(): void {
    this.userName = 'Test user name';
    this.testComponents = new Array<string>(
      'Vikas',
      'Sachin',
      'Satish',
      'Avani',
      'Antara'
    );
  }

  messageReceived($event: string) {
    this.message = $event;
  }
}
