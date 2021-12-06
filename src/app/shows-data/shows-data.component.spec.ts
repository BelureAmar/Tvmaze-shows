import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { throwError } from 'rxjs';
import { API_CONFIG, API_CONFIG_TOKEN } from '../apiConfig/api.config';
import { ServiceService } from '../services/service.service';
import { ShowsDataComponent } from './shows-data.component';

describe('ShowsDataComponent', () => {
  let component: ShowsDataComponent;
  let fixture: ComponentFixture<ShowsDataComponent>;
  let service: ServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ ShowsDataComponent ],
      providers: [
        ServiceService,
        {provide: API_CONFIG_TOKEN, useValue: API_CONFIG},
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {paramMap: {get: () => '123'}}}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsDataComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Func: getSearchKey method', () => {
    it('should return abc ', () => {
      service.setSearch('abc');
      expect(component.search).toEqual('abc');
    });
  });

  describe('Func: getShowDetails method', () => {
    it('should return show details', () => {
      component.getShowDetails();
      expect(component.showData$).toBeDefined();
    });

    it('should return show details', () => {
      spyOn(service, 'getShowCrewCastDetails').and.returnValue(throwError({}));
      component.getShowDetails();
      expect(component.showData$).toBeDefined();
    });
  });
});
