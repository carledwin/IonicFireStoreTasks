import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from './../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TaskListPage } from './task-list.page';

const routes: Routes = [
  {
    path: '',
    component: TaskListPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaskListPage]
})
export class TaskListPageModule {}
