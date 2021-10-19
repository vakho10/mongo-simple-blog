import { Component, Input, OnInit } from '@angular/core';
import Post from 'src/app/models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
