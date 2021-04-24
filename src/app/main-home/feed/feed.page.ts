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
      img: 'https://revistabula.com/wp/wp-content/uploads/2019/06/coxinha.jpg',
      caminho: 'feed-details',
      time: 30,
      star: 4.3,
      saved : false,
    },
    {
      user: 'Abner Almeida',
      id: 80,
      liked: false,
      postName: 'Bolo de Chocolate',
      img: 'https://imgs.6sqft.com/wp-content/uploads/2015/07/20211916/Brooklyn-Blackout-Cake.jpg',
      caminho: 'feed-bolo',
      time: 60,
      star: 4.7,
      saved : false,
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
