import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PostsService } from '../shared/services/posts.service';

export interface PostData {
  id: number;
  userId: number;
  title: string;
  body: string;
};

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  dataSource: MatTableDataSource<PostData>;

  constructor(
    private svc: PostsService
  ) {
    this.svc.getAllPosts().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
