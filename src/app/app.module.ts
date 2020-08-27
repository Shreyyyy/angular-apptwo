import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { TopicComponent } from './topic/topic.component';
import { NiceComponent } from './nice/nice.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'nice', component: NiceComponent },
  { path: 'product', component: ProductComponent },
  { path: 'topic', component: TopicComponent },
  { path: 'parent', component: ParentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    NiceComponent,
    ProductComponent,
    PageNotFoundComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
