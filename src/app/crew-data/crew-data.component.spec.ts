import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CrewDataComponent } from './crew-data.component';

describe('CrewDataComponent', () => {
  let component: CrewDataComponent;
  let fixture: ComponentFixture<CrewDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
