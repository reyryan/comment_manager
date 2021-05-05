import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  dataFilter:FormGroup = this.fb.group({
    name: [''],
    email: [''],
    body: ['']
  });

  dataStructure = [
    { id:'name' },
    { id:'email' },
    { id:'body' }
  ];

  postDetail;
  comments = [];

  constructor(
    private route: ActivatedRoute,
    private svc: PostsService,
    private fb: FormBuilder
  ) {
    this.route.paramMap.pipe(
      mergeMap(data => {
        const postId = data.get('id');
        return this.svc.getPost(postId);
      }),
      mergeMap(postDetail => {
        this.postDetail = postDetail;
        return this.svc.getAllComments(postDetail.id);
      })
    ).subscribe(
      comments => {
        this.comments = comments;
      }
    )
  }

  ngOnInit(): void {
  }

  clearFilters() {
    this.filters.reset();
  }

  private filterItems(data) {
    let finalData = data.slice(0);
    for(let i=0; i<this.dataStructure.length; i++) {
      const field = this.dataStructure[i];
      const formControl = this.filters.get(field.id);

      if(!formControl || !formControl.value) {
        continue;
      }

      finalData = finalData.filter(item => {
        const normalisedName = String(item[field.id]).toLowerCase().trim();
        const normalizedInput = formControl.value.toLowerCase().trim();
        return normalisedName.indexOf(normalizedInput) > -1;
      })
    }
    return finalData;
  }

  get filters() {
    return this.dataFilter;
  }

  get list() {
    return this.filterItems(this.comments)
  }
}
