import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn:'root'})
export class TasksService{
    private tasksData=[ 
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
    ];
    constructor(){
        const tasks=localStorage.getItem('tasks');
        if(tasks){
            this.tasksData=JSON.parse(tasks);
        }
    }
    getUserTasks(userId:string){
        return this.tasksData.filter((task)=>task.userId==userId);
    }

    addTask(a_taskData:NewTaskData,userId:string){
        this.tasksData.push({
            id:new Date().getTime().toString(),
            userId:userId,
            title:a_taskData.title,
            summary:a_taskData.summary,
            dueDate:a_taskData.date,
        });
        this.saveTasks();
    }

    removeTask(id:string){
        this.tasksData=this.tasksData.filter((taskItem)=>taskItem.id!==id);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasksData));
    }
}