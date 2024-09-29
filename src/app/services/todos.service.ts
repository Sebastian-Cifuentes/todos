import { Injectable, Injector } from '@angular/core';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { Todo } from '../interfaces/todo.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService extends ApiService {

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  getTodos(): Observable<Todo[]> {
    return this.get('todos');
  }
  
  getTodo(id: string): Observable<Todo> { 
    return this.get(`todos/${id}`);
  }
  
  addTodo(todo: Todo) {
    return this.post('todos', todo);
  }
  
  editTodo(id: string, todo: Todo) {
    return this.put(`todos/${id}`, todo);
  }
  
  deleteTodo(id: number) {
    const params = new HttpParams()
      .set('id', id);
    return this.delete(`todos/${id}`, { params });
  }



}