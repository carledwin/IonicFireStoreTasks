import { MenuController, NavController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { OverlayService } from './../../../core/services/overlay.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-logout-button',
  template: `
    <ion-buttons>
      <ion-button (click)="logout()">
        <ion-icon name="exit" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  `,
})
export class LogoutButtonComponent implements OnInit {

@Input() menuId: string;

  constructor(private authService: AuthService,
              private menuCtrl: MenuController,
              private navCtrl: NavController,
              private overlayService: OverlayService) { }

  async ngOnInit(): Promise<void> {

    if(!(await this.menuCtrl.isEnabled(this.menuId))){
      
      this.menuCtrl.enable(true, this.menuId);
    }
  }

  async logout(): Promise<void> {

    await this.overlayService.alert({

      message: 'Do you really want to quit?', 
      buttons:[
        {
          text: 'Yes',
          handler: async () =>  {

            await this.authService.logout();

            await this.menuCtrl.enable(false, this.menuId);

            this.navCtrl.navigateRoot('/login');
          }
        },
        'No'
      ] 
    });
  }

}
