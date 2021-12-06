import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: ServiceService, private route: Router) { }

  ngOnInit(): void {
  }

  search(event): void {
    if (event) {
      this.service.setSearch(event.target.value);
      this.route.navigate(['/search', event.target.value]);
    }
  }

  pressEvent(event: any): void {
    const pattern = /[A-Za-z0-9 ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
  }

}
