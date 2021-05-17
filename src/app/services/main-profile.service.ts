import { Injectable } from '@angular/core';

interface User {
  id: number;
  foto: string;
  name: string;
  description: string;
  post1: string;
  post2: string;
  post3: string;

}
@Injectable({
  providedIn: 'root',
})
export class MainProfileService {
  public user = {
    id: 123,
    foto: 'https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1',
    name: 'User123',
    description: 'Adicione uma Descrição',
    post1: 'https://picsum.photos/id/19/400/400',
    post2: 'https://picsum.photos/id/22/400/400',
    post3: 'https://picsum.photos/id/24/400/400',
  };



  constructor() {}
}
