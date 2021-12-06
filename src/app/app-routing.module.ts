import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { SearchShowsComponent } from './search-shows/search-shows.component';
import { ShowsDataComponent } from './shows-data/shows-data.component';
import { ShowsComponent } from './shows/shows.component';

const routes: Routes = [
  {
    path: '',
    component: ShowsComponent
  },
  {
    path: 'search/:name',
    component: SearchShowsComponent
  },
  {
    path: 'show/:id',
    component: ShowsDataComponent
  },
   {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
