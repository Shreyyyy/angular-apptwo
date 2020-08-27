import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public topics: Array<String> = ['Shrey', 'ssls'];
  public addTopic(tp: any) {
    this.topics.push(tp.value)
    tp.value = "";
    tp.focus();
  }
}
