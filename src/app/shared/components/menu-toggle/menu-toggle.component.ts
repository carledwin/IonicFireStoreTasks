import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-menu-toggle',
  //templateUrl: './menu-toggle.component.html',
  //styleUrls: ['./menu-toggle.component.scss'],
  template: `
  <ion-buttons>
      <ion-menu-toggle [menu]="menu">
        <ion-button>
          <ion-icon slot="icon-only" name="menu"></ion-icon>
        </ion-button>
      </ion-menu-toggle>
    </ion-buttons>
  `,
})
export class MenuToggleComponent {

  //inputProperty
  @Input() menu: string;
}
