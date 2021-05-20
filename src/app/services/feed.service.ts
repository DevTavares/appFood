import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

interface Posts {
  user: string;
  id: number;
  img: string;
  liked: boolean;
  postName: string;
  time: number;
  star: number;
  saved: boolean;
  caminho: string;
}

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private storage: Storage) {
    this.loadPosts();
   }

  public posts: Posts[] =[];
    


  public aux = this.posts.length - 1;
  public postFavorite = [];
  public count = 0;


  public async loadPosts() {
    const receita = await this.storage.get('posts') as Posts[];
    if(receita){
      this.posts.push(...receita);
    }
  }

  public allPosts(){
    return this.posts;
  }

  public favoritePosts(){
    this.aux = this.posts.length - 1;
    for (this.aux; this.aux >= 0; -1){
      if (this.posts[this.aux].saved){
        this.postFavorite[this.count] = this.posts[this.aux];
        this.count = this.count + 1;
      }
      this.aux = this.aux -1;
    }
    return this.postFavorite;
  }

  public savePost(id: number){
    this.aux = this.posts.length - 1;
    for (this.aux; this.aux >= 0; -1){
      if(this.posts[this.aux].id === id){
        this.posts[this.aux].saved = this.posts[this.aux].saved ? true : false;
      }
      this.aux = this.aux -1;
    }
    console.log('### POSTS alterado', this.posts);

  }

}