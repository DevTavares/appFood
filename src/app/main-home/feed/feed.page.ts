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
      time: 30,
      star: 4.3,
      saved : false,
    },
    {
      user: 'Abner Almeida',
      id: 80,
      liked: false,
      postName: 'Bolo de Chocolate',
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
