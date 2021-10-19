import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import Post from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  $createdPost: Subject<Post>;
  $posts: Subject<Post[]>;

  constructor(private http: HttpClient) {
    this.$posts = new Subject<Post[]>();
    this.$createdPost = new Subject<Post>();
  }

  getAll(): Observable<Post[]> {
    this.http.get<Post[]>('/api/posts').subscribe(result => {
      this.$posts.next(result);
    });
    return this.$posts;
  }

  save(post: Post): Observable<Post> {
    const newPost = this.http.post<Post>('/api/posts', post).subscribe(result => {
      this.$createdPost.next(result);
      this.getAll();
    })
    return this.$createdPost;
  }
}
