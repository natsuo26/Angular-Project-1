import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
import { NgFor,NgIf  } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent,TasksComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users=DUMMY_USERS;
  selectedUserID?:string;

  get selectedUser(){
    return this.users.find((user)=>user.id===this.selectedUserID);
  }
  onSelectUser(id:string){
    this.selectedUserID=id;
  }
}
