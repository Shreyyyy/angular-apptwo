import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  i = 1;
  @Input()
  msg: String;

  @Output()
  public out: EventEmitter<string> = new EventEmitter();
  public change() {
    this.out.emit(this.msg.toUpperCase());
    this.msg = 'Click ' + this.i + 'times';
    this.i += 1;

  }



}
