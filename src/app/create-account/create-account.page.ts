import { Component, OnInit } from '@angular/core';

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
  constructor() {
    
   }

  ngOnInit() {
  }

 
  
}
