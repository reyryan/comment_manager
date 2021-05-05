import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private api_url;

  constructor(
    private svc: ApiService
  ) {
    this.api_url = environment.api;
  }

  getAllPosts() {
    const path = `${this.api_url}/posts`;
    
    return this.svc.get(path);
  }

  getPost(postId) {
    const path = `${this.api_url}/posts/${postId}`;
    
    return this.svc.get(path);
  }
  
  getAllComments(postId) {
    const path = `${this.api_url}/comments`;

    const params = new HttpParams()
      .set('postId', postId);
    
    return this.svc.get(path, params);
  }
}
