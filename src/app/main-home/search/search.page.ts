import { Component, OnInit } from '@angular/core';

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
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public currentSearch = '';
  public posts: Posts[] = [
    {
      user: 'Luan Dimas',
      id: 18,
      liked: false,
      postName: 'Feijoada Completa',
      time: 150,
      star: 4.9,
      saved: true,
      img: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/09/comidas-tipicas-capa2019.jpg',
    },
    {
      user: 'Rodrigo tavares',
      id: 99,
      liked: false,
      postName: 'Tapioca De Morango',
      time: 70,
      star: 4.5,
      saved: true,
      img: 'https://i2.wp.com/brasil.cambly.com/wp-content/uploads/2019/03/shutterstock_1151228951.jpg?resize=800%2C534&ssl=1',
    },
    {
      user: 'Matheus Felipe',
      id: 44,
      liked: false,
      postName: 'Pudim Caseiro',
      time: 75,
      star: 4.6,
      saved: true,
      img: 'https://img.itdg.com.br/tdg/images/recipes/000/031/593/318825/318825_original.jpg?mode=crop&width=710&height=400',
    },
    {
      user: 'Roberto Pereira',
      id: 55,
      liked: true,
      postName: 'Coxinha de Frango',
      time: 90,
      star: 4.3,
      saved: true,
      img: 'https://revistabula.com/wp/wp-content/uploads/2019/06/coxinha.jpg',
    },
    {
      user: 'Abner Almeida',
      id: 80,
      liked: false,
      postName: 'Bolo de Chocolate',
      time: 80,
      star: 4.7,
      saved: true,
      img: 'https://imgs.6sqft.com/wp-content/uploads/2015/07/20211916/Brooklyn-Blackout-Cake.jpg',
    },
  ];

  public filteredPosts = this.posts;

  constructor() {}
  public updateFilter(){
    console.log('buscando por', this.currentSearch);
    this.posts = this.filteredPosts.filter(posts => posts.postName.toLowerCase().includes(this.currentSearch));
  }

  ngOnInit() {
  }

}
