import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public posts = [
    {
      user: 'Roberto Pereira',
      id: 55,
      liked: true,
      postName: 'Coxinha de Frango',
      time: 90,
      star: 4.3,
      saved : false,
      img: 'https://revistabula.com/wp/wp-content/uploads/2019/06/coxinha.jpg',
    },
    {
      user: 'Abner Almeida',
      id: 80,
      liked: false,
      postName: 'Bolo de Chocolate',
      time: 80,
      star: 4.7,
      saved : false,
      img: 'https://moinhoglobo.com.br/wp-content/uploads/2019/03/08-bolo-chocolate-1024x683.png',
    },
    {
      user: 'Matheus Felipe',
      id: 44,
      liked: false,
      postName: 'Pudim Caseiro',
      time: 75,
      star: 4.6,
      saved : false,
      img: 'https://img.itdg.com.br/tdg/images/recipes/000/031/593/318825/318825_original.jpg?mode=crop&width=710&height=400',
    },
  ];

  constructor() {}

  ngOnInit() {}

  public toggleLike(post) {
    post.liked = !post.liked;
  }
  public toggleSave(post) {
    post.saved = !post.saved;
  }

}
