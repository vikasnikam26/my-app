import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-componnent',
  templateUrl: './test-componnent.component.html',
  styleUrls: ['./test-componnent.component.css']
})
export class TestComponnentComponent implements OnInit {
 
  @Input() name : string="";
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  sendMessage() {
    console.log('Button Clicked!' + this.name);
    this.messageEvent.emit(this.name);
  }
}
