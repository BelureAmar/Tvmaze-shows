import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShowModel } from '../Model/models';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-search-shows',
  templateUrl: './search-shows.component.html',
  styleUrls: ['./search-shows.component.css']
})
export class SearchShowsComponent implements OnInit {

  searchShows$: Observable<any>;

  constructor(private service: ServiceService, private route: Router) { }

  ngOnInit(): void {
    this.getSearchShows();
  }

  getSearchShows(): void {
    this.service.getSearch().subscribe(value => {
      if (value) {
        this.searchShows$ = this.service.getSearchByKey(value).pipe(
          map( (shows: Array<ShowModel>) => {
            return shows.sort((show1: ShowModel, show2: ShowModel) => show2.rating.average - show1.rating.average);
          })
        );
      } else {
        this.route.navigate(['']);
      }
    });
  }
}
