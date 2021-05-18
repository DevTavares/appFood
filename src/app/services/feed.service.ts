import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private posts =[
    {
    user: 'Roberto Pereira',
    id: 55,
    liked: true,
    postName: 'Coxinha de Frango',
    time: 90,
    star: 4.3,
    saved : true,
    caminho: 'feed-details',
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
    caminho: 'feed-bolo',
    img: 'https://imgs.6sqft.com/wp-content/uploads/2015/07/20211916/Brooklyn-Blackout-Cake.jpg',
  },
  {
    user: 'Matheus Felipe',
    id: 44,
    liked: false,
    postName: 'Pudim Caseiro',
    time: 75,
    star: 4.6,
    saved : true,
    caminho: 'feed-bolo',
    img: 'https://img.itdg.com.br/tdg/images/recipes/000/031/593/318825/318825_original.jpg?mode=crop&width=710&height=400',
  },
];

  public aux = this.posts.length - 1;
  public postFavorite = [];
  public count = 0;


  public allPosts() {
    return this.posts;
  }

  public favoritePosts(){
    this.aux = this.posts.length - 1;
    console.log('### POSTS', this.posts);
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

  constructor() { }
}
