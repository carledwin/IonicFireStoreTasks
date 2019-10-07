import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  tasks$: Observable<Task[]>;

  constructor() { }

  ngOnInit(): void {
  
    this.tasks$ = of([
      {id: 'fdrerere1', title: 'Estudar Ionic', done: false},
      {id: 'ffdferee2', title: 'Estudar Cordova', done: false}
    ]);
  }

}
