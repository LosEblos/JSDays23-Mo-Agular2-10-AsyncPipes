import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../models/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: any;

  @Output() done = new EventEmitter<any>();

  colorToBind = 'blue';

  constructor() {}

  ngOnInit() {}

  markTodoAsDone(todo: Todo) {
    todo.done = !todo.done;
    this.done.emit(todo);
  }
}
