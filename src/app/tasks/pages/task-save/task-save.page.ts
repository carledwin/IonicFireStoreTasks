import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OverlayService } from './../../../core/services/overlay.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { TasksService } from './../../services/tasks.service';

@Component({
  selector: 'app-task-save',
  templateUrl: './task-save.page.html',
  styleUrls: ['./task-save.page.scss'],
})
export class TaskSavePage implements OnInit {

  taskFormGroup: FormGroup;

  pageTitle = '...';

  taskId = undefined;

  constructor(private formBuilder: FormBuilder,
     private navCtrl: NavController,
     private overlayService: OverlayService,
     private activatedRoute: ActivatedRoute, //rota atual
     private tasksService: TasksService) { }

  ngOnInit(): void {
  
    this.createForm();
    this.init();
  }

  private init(): void{

    const taskId = this.activatedRoute.snapshot.paramMap.get('id');

    if(!taskId){

      this.pageTitle = 'Create Task';
      console.log('Eh criacao');
      return;
    }

    console.log('Eh edicao');
    this.taskId = taskId;

    console.log('TaskId: ', this.taskId);

    this.pageTitle = 'Edit Task';

    this.tasksService
    .get(taskId)
    .pipe(take(1))
    .subscribe(({title, done}) => {

      this.taskFormGroup.get('title').setValue(title);
      this.taskFormGroup.get('done').setValue(done);

      console.log('Encontrou a task');
    });
  }

  private createForm(): void{

    this.taskFormGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      done: [false]
    });
  }

  async onSubmit(): Promise<void> {

    const loading = await this.overlayService.loading({message: 'Saving ....'});

    console.log('Task In: ', this.taskFormGroup.value);

    try {

      const task = !this.taskId 
      ? await this.tasksService.create(this.taskFormGroup.value)
      : await this.tasksService.update({id: this.taskId, ...this.taskFormGroup.value});

      console.log('Task saved! ', task);

      this.navCtrl.navigateBack('/tasks');
    } catch (error) {

      console.error('Error saving Task, ', error);

      await this.overlayService.toast({message: error.message});
    } finally {

      loading.dismiss();
    }
  }
}
