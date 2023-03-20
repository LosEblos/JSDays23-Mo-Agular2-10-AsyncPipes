import { Component, ElementRef } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Observable, of } from 'rxjs';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  show = true;
  todos$: Observable<Todo[]>;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly todoService: TodoService
  ) {
    console.log('elementRef from constructor', elementRef);
  }

  ngOnInit() {
    this.todos$ = this.todoService.getAll();
  }

  catchDoneEvent(todo: any) {
    console.log(todo);
  }

  logElementRef() {
    console.log('elementRef from console as property', this.elementRef);
  }

  toggle() {
    this.show = !this.show;
  }
}
