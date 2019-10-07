import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {

  //<app-task-item [task]="task" property bind (doneEventEmitter)="onDone($event)"
  @Input() task: Task;

  //eventos que podem ser emitidos pelo component para concluir a task
  @Output() doneEventEmitter = new EventEmitter<Task>();
  @Output() updateEventEmitter = new EventEmitter<Task>();
  @Output() deleteEventEmitter = new EventEmitter<Task>();

}
