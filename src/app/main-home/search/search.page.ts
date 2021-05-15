import { Component, OnInit } from '@angular/core';

interface Posts{
  user: string;
  id: number;
  name: string;
  img: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public currentSearch = '';
  public posts: Posts[] = [
    {
      user: 'Roberto Pereira',
      id: 55,
      name: 'Coxinha de Frango',
      img: 'https://revistabula.com/wp/wp-content/uploads/2019/06/coxinha.jpg',
    },
    {
      user: 'Abner Almeida',
      id: 80,
      name: 'Bolo de Chocolate',
      img: 'https://imgs.6sqft.com/wp-content/uploads/2015/07/20211916/Brooklyn-Blackout-Cake.jpg',
    },
    {
      user: 'Matheus Felipe',
      id: 44,
      name: 'Pudim Caseiro',
      img: 'https://img.itdg.com.br/tdg/images/recipes/000/031/593/318825/318825_original.jpg?mode=crop&width=710&height=400',
    },
  ];

  public filteredPosts = this.posts;

  constructor() {}
  public updateFilter(){
    console.log('buscando por', this.currentSearch);
    this.posts = this.filteredPosts.filter(posts => posts.name.toLowerCase().includes(this.currentSearch));
  }

  ngOnInit() {
  }

}
