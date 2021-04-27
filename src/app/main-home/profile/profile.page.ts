import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public user =
    {
      name: '',
      description: 'Especialista em Gastronomia, adoro fazer receitas e compartilhar para o mundo.',
    };

  constructor() { }

  ngOnInit() {
  }

}
