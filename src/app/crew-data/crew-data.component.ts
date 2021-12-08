import { Component, Input } from '@angular/core';
import { ShowModel } from '../Model/models';

@Component({
  selector: 'app-crew-data',
  templateUrl: './crew-data.component.html',
  styleUrls: ['./crew-data.component.css']
})
export class CrewDataComponent {

  @Input() crewList: any[];
  @Input() name: string;
}
