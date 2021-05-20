import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';

interface Posts {
  user: string;
  id: number;
  img: string;
  liked: boolean;
  postName: string;
  time: number;
  star: number;
  saved: boolean;
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  public posts = [];

  public atualizaPagina(){
    this.posts = this.feedService.favoritePosts();
  }
  constructor(private feedService: FeedService) {}

  ngOnInit() {
    this.atualizaPagina();
  }
}
