import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
