import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  posts = [
    {
      title: 'Mon premier post',
      content: 'ceci est le contenu de mon premier post ',
      loveIts: 2,
      created_at: '25/03/2019, 09:30 AM'
    },
    {
      title: 'Mon deuxième post ',
      content: 'et ça est le contenu de mon deuxième post',
      loveIts: -1,
      created_at: '25/03/2019, 12:30 AM'
    },
    {
      title: 'Encore un post ',
      content: 'et enfin un dernier contenu pour le dernier post',
      loveIts: 0,
      created_at: '25/03/2019, 15:30 AM'
    }
  ];
}
