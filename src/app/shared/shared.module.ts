import { MenuToggleComponent } from './components/menu-toggle/menu-toggle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [LogoutButtonComponent, MenuToggleComponent],
  imports: [IonicModule],
  exports: [CommonModule, ReactiveFormsModule, IonicModule, CommonModule, LogoutButtonComponent, MenuToggleComponent]
})
export class SharedModule {}
