import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onDontLoveIt() {
    this.loveIts--;
    console.log('Not love ' + this.loveIts);
  }

  onLoveIt() {
    this.loveIts++;
    console.log('love ' + this.loveIts);
  }
}
