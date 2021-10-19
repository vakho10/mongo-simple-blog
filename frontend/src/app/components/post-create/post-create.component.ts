import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Post from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  postCreateForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {
    this.postCreateForm = this.formBuilder.group({
      title: '',
      body: ''
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const post = this.postCreateForm.value as Post;
    post.createDate = new Date();
    this.postService.save(post).subscribe(result => {
      console.log('CREATED POST', result);
    });
  }

}
