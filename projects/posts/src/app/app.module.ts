import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'comment/:id',
    component: CommentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CommentComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
