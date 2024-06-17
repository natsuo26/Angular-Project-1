import { Component, Input, Output} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NgFor,NgIf  } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required:true}) userId!:string
  @Input({required:true}) name!:string;

  isAddingTask=false;
  // private TasksService:TasksService;
  constructor(private TasksService:TasksService){}
  // {
  //   this.TasksService=TasksService;
  // }


  get selectedUserTasks(){
    return this.TasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }


  onCloseAddTask(){
    this.isAddingTask=false;
  }

}
