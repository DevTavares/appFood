import { MainProfileService } from './../../services/main-profile.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public user = this.MainProfileService.user;
  public image = '';

  // tslint:disable-next-line: no-shadowed-variable
  constructor(private MainProfileService: MainProfileService) {}
  public async tirarFoto(){
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
    });
    this.image = photo.dataUrl;
  }
  ngOnInit() {}
}
