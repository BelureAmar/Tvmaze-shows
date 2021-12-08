import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { API_CONFIG, API_CONFIG_TOKEN } from '../apiConfig/api.config';
import { ServiceService } from '../services/service.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: ServiceService;

beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ HeaderComponent ],
      providers: [
        {provide: API_CONFIG_TOKEN, useValue: API_CONFIG},
        ServiceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Func: search method', () => {
    it('should return event ', () => {
      const mockEvent: Event = <Event><any>{
        target: {
          value: 'under the demo'      
      }
      }
      component.search(mockEvent);
      service.getSearch().subscribe(res => {
        expect(res).toBe('under the demo');
      });
    });


    it('should return empty string ', () => {
      component.search('');
      service.getSearch().subscribe(res => {
        expect(res).toEqual('');
      });
    });
  });

  describe('Func: pressEvent method', () => {
    it('pressEvent function test with abc as input ', () => {
      component.pressEvent(new Event('test'));
    });
  });

});
