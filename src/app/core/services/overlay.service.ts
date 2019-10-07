import { Injectable } from '@angular/core';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { LoadingOptions, AlertOptions, ToastOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(private alertCtrl: AlertController, 
              private loadingCtrl: LoadingController, 
              private toastCtrl: ToastController) { }

  async alert(alertOptions?: AlertOptions ): Promise<HTMLIonAlertElement>{

    const alert = await this.alertCtrl.create(alertOptions);

    await alert.present();

    return alert;
  }

  async loading(loadingOptions?: LoadingOptions): Promise<HTMLIonLoadingElement>{

    const loading = await this.loadingCtrl.create({

      message: 'Loading....',
      ...loadingOptions
    });

    await loading.present();

    return loading;
  }

  async toast(toastOptions?: ToastOptions): Promise<HTMLIonToastElement>{

    const toast = await this.toastCtrl.create({

      position: 'bottom',
      duration: 7000,
      showCloseButton: true,
      closeButtonText: 'OK',
      ...toastOptions
    });

    await toast.present();

    return toast;
  }
}
