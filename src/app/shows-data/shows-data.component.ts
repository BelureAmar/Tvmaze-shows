import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../services/service.service';
import { Observable } from 'rxjs';
import { ShowModel } from '../Model/models';

@Component({
  selector: 'app-shows-data',
  templateUrl: './shows-data.component.html',
  styleUrls: ['./shows-data.component.css']
})
export class ShowsDataComponent implements OnInit {

  showData$: Observable<ShowModel>;
  search: string;

  constructor(private service: ServiceService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSearchKey();
    this.getShowDetails();
  }

  getSearchKey(): void {
    this.service.getSearch().subscribe(value => {
      this.search = value ? value : '';
    });
  }

  getShowDetails(): void {
    if (this.router.snapshot.paramMap.get('id')) {
      const showId = +(this.router.snapshot.paramMap.get('id'));
      if (showId) {
        this.showData$ = this.service.getShowCrewCastDetails(showId);
      } else {
        this.route.navigate(['']);
      }
    }
  }
}
