import { OverlayService } from './../../../core/services/overlay.service';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../../models/task.model';
import { NavController } from '@ionic/angular';
import { TasksService } from './../../services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage {

  tasks$: Observable<Task[]>;

  constructor(private tasksService: TasksService,
    private overlayService: OverlayService,
    private navCtrl: NavController) { }

  ionViewDidEnter(): void {
  
    this.tasks$ = this.tasksService.getAll();
    console.log('Tasks... >>> ', this.tasks$);
  }

  onUpdate(task: Task): void {

    console.log('preparando para editar ....');
    this.navCtrl.navigateForward(`/tasks/edit/${task.id}`);
    // ou this.navCtrl.navigateForward(['tasks', 'edit', task.id]);
  }

  async onDelete(task: Task): Promise<void> {

    console.log('preparando para excluir ....');

    await this.overlayService.alert({
      message: `Do you really want to delete the task "${task.title}"?`,
    buttons: [
      {
        text: 'Yess',
        handler: async () => {

          await this.tasksService.delete(task);

          await this.overlayService.toast({

            message: `Task "${task.title}" deleted!`
          });
        }
      },
      'No'
    ]
  });
  }

}
