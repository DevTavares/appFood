import { MainProfileService } from './../../services/main-profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

public user = this.MainProfileService.user;

  constructor(private MainProfileService: MainProfileService) { }

  ngOnInit() {
  }

}
