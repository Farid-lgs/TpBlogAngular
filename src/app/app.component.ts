import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Premier Post',
      content: 'Un commentaire',
      loveIts: 24,
      created_at: 'Wed Oct 30 2021 16:33:22'
    },
    {
      title: 'Second Post',
      content: 'deux commentaire',
      loveIts: 0,
      created_at: 'Wed Oct 27 2021 16:33:22'
    },
    {
      title: 'Troisieme Post',
      content: 'trois commentaire',
      loveIts: 12,
      created_at: 'Wed Oct 12 2021 16:33:22'
    },
    {
      title: 'Quatrieme Post',
      content: 'quatre commentaire',
      loveIts: 10,
      created_at: 'Wed Oct 01 2021 16:33:22'
    }
  ];
}
