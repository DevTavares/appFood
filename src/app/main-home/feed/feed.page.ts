import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public service = new FeedService();
  public posts = this.service.allPosts();

  constructor() {}

  ngOnInit() {}

  public toggleLike(post) {
    post.liked = !post.liked;
  }
  public toggleSave(post) {
    this.service.savePost(post.id);
    post.saved = !post.saved;
  }

}
