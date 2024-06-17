import { Component,Input, computed, input, Output,output, EventEmitter} from '@angular/core';

import{ type User } from './user.model'
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!: string; 
  // @Input({required:true}) name!: string;
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!:boolean;
  @Output() select=new EventEmitter<string>();
  // avatar=input.required<string>();
  // name=input.required<string>();
  onSelectUser(){
    this.select.emit(this.user.id);
  }
  // imagePath=computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
}
