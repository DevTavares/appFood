import { MainProfileService } from './../../services/main-profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  public user;

  constructor(
    private mainProfileService: MainProfileService,
    route: ActivatedRoute
    ) {
      const id = +route.snapshot.paramMap.get('id');
      this.user = this.mainProfileService.user.id;
    }

  ngOnInit() {}
}
