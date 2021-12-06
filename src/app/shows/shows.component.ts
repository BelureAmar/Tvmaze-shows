import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShowModel } from '../Model/models';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  popularShows$: Observable<Array<ShowModel>>;
  genreShows: Array<ShowModel> = [];
  popularRating = 8;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.setSearch('');
    this.getPopularShows();
  }

  // get popular shows whose rating is greater than equal to 8
  getPopularShows(): void {
    this.popularShows$ = this.service.getShow().pipe(
      map( (shows: Array<ShowModel>) => {
        const popularShows = shows.filter(show => show.rating.average > this.popularRating);
        this.genreShows = this.arrangeShows(shows, popularShows);
        return popularShows;
      })
    );
  }

  // should return the popular and unique genre shows
  arrangeShows(shows: Array<ShowModel>, popularShows: Array<ShowModel>): Array<ShowModel> {
    const uniqueGenres: Array<string> = this.getUniqueGenres(shows);
    const result: Array<ShowModel> = this.groupByUniqueGenres(uniqueGenres, shows);

    const list = popularShows.sort((show1: ShowModel, show2: ShowModel) => show2.rating.average - show1.rating.average);

    return [
      {...list[0], name: `Popular Shows`, list }, ...result
    ];
  }

  // get unique genres from all shows
  getUniqueGenres(shows: Array<ShowModel>): Array<string> {
    return shows.reduce((acc: Array<any>, res: ShowModel) => {
        acc = [...acc, ...res.genres];
        return [...new Set(acc)].sort();
    }, []);
  }

  // should return genre shows
  groupByUniqueGenres(genres: Array<string>, shows: Array<ShowModel>): Array<ShowModel> {
    return genres.reduce( (res: Array<any>, genre: string) => {
        const list: Array<ShowModel> = shows.filter( (show: ShowModel) => show.genres.indexOf(genre) !== -1)
                          .sort((show1: ShowModel, show2: ShowModel) => show2.rating.average - show1.rating.average);
        const newGenre = {name: `${genre}`, list};
        res = [...res, newGenre];
        return res;
    }, []);
  }
}
