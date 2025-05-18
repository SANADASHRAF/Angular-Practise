import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TODO } from '../Models/todo';
import { stringify } from 'querystring';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiurl = "http://localhost:3000/todos"
  constructor(private httpclient: HttpClient) { }


  GetTodos(): Observable<TODO[]> {
    return this.httpclient.get<TODO[]>(this.apiurl);
  }


  GetTodoByID(ID: Number): Observable<TODO> {
    return this.httpclient.get<TODO>(`${this.apiurl}/${ID}`);
  }


  CreateTodo(todo: TODO): Observable<TODO> {
    return this.httpclient.post<TODO>(this.apiurl, JSON.stringify(todo));
  }



  UpdateTodo(todo: TODO): Observable<TODO> {
    return this.httpclient.put<TODO>(`${this.apiurl}/${todo.id}`, todo);
  }


  DeleteTodo(id: Number): Observable<void> {
    return this.httpclient.delete<void>(`${this.apiurl}/${id}`);
  }

  
}
