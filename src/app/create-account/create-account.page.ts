import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  public post(name, email){
    console.log("Nome do usuario: "+name);
    console.log("Email do usuario: "+email);
  }

  constructor(public alertCtrl: AlertController) {
   }

  ngOnInit() {
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Termos e Condições de uso',
      message: 'Declaro que concordo com os termos e condições de uso do aplicativo.',
      buttons: ['Cancel', 'Concordo']
    });

    await alert.present();
  }
}
