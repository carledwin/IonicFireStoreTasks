import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../models/task.model';
import { TasksService } from './../../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage {

  tasks$: Observable<Task[]>;

  constructor(private tasksService: TasksService) { }

  ionViewDidEnter(): void {
  
    this.tasks$ = this.tasksService.getAll();
    console.log('Tasks... >>> ', this.tasks$);
  }

}
