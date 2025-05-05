import { Component } from '@angular/core';
import { StringifyOptions } from 'node:querystring';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  imports: [CommonModule,FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
tasks:string[]=[]
newTask:string=''
editIndex:number |null=null

addTask(){
  if(this.newTask.trim()){
    this.tasks.push(this.newTask.trim());
    this.newTask=''
  }
}

editTask(index:number){
  this.newTask=this.tasks[index];
  this.editIndex=index;
}

saveEdit(){
  if(this.editIndex!==null && this.newTask.trim()){
    this.tasks[this.editIndex]=this.newTask.trim();
    this.newTask='';
    this.editIndex=null
  }
}

deleteTask(index:number){
  this.tasks.splice(index,1);
}
}
