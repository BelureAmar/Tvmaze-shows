import { Component, Input, OnInit } from '@angular/core';
import { ShowModel } from '../Model/models';

@Component({
  selector: 'app-crew-data',
  templateUrl: './crew-data.component.html',
  styleUrls: ['./crew-data.component.css']
})
export class CrewDataComponent implements OnInit {

  @Input() crewList: any[];
  @Input() name: string;

  constructor() { }

  ngOnInit(): void {
  }

}
