import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertCtrl: AlertController) {}

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Aviso',
      message: 'Um perfil do tipo CONVIDADO não tem as mesmas permissões de uso do aplicativo em relação à um usuário cadastrado!',
      buttons: ['OK']
    });

    await alert.present();
  }
}
