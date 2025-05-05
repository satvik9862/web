import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [TodoComponent],
  template: `<app-todo></app-todo>`,

})
export class AppComponent {}