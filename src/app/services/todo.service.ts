import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {
  private actionUrl = 'https://tt-todos.azurewebsites.net/todos';

  constructor(private readonly httpClient: HttpClient) {}

  create(todo: Todo) {
    return this.httpClient.post<Todo>(this.actionUrl, todo);
  }

  get(todoId: number) {
    return this.httpClient.get<Todo>(`${this.actionUrl}/${todoId}`);
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.actionUrl);
  }

  update(todo: Todo) {
    return this.httpClient.put(`${this.actionUrl}/${todo.id}`, todo);
  }

  delete(todoId: number) {
    return this.httpClient.delete(`${this.actionUrl}/${todoId}`);
  }
}
