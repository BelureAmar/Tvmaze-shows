import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { API_CONFIG, API_CONFIG_TOKEN } from '../apiConfig/api.config';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;
  let httpMock: HttpTestingController;
  const show = {
    id: 1,
    url: 'http://www.tvmaze.com/shows/1/under-the-dome',
    name: 'Under the Dome',
    type: 'Scripted',
    language: 'English',
    genres: [
      'Drama',
      'Science-Fiction',
      'Thriller'
    ],
    status: 'Ended',
    runtime: 60,
    premiered: '2013-06-24',
    officialSite: 'http://www.cbs.com/shows/under-the-dome/',
    rating: {
      average: 9.5
    },
    image: {
      medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      original: 'http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg'
    }
  };
  const shows = [
    {...show}, {...show, id: 1217}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {provide: API_CONFIG_TOKEN, useValue: API_CONFIG}
      ]
    });
    service = TestBed.inject(ServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the value as abc when we call getSearch', () => {
    service.setSearch('abc');
    const obs$ = service.getSearch();
    obs$.subscribe(res => {
      expect(res).toEqual('abc');
    });
  });

  describe('Func: getShow method ', () => {
    it('should get the list of all shows', () => {
      spyOn(service, 'getShow').and.returnValue(of(shows));
      service.getShow().subscribe((res) => {
        expect(res).toEqual(shows);
      });
    });
  });

  describe('Func: getShowCrewCastDetails method ', () => {
    it('should return the show crew cast details', () => {
      const castCrewInfo = {
        ...show,
        _embedded: {
          cast: [
            {
              person: {
                id: 14234,
                name: 'Bryan Cranston',
                image: {
                  medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/231/579726.jpg',
                  original: 'http://static.tvmaze.com/uploads/images/original_untouched/231/579726.jpg'
                }
              }
            }
          ],
          crew: [
            {character: {id: 45531, name: 'Jesse Pink man'}},
            {person: {id: 12328, url: 'http://www.tvmaze.com/people/12328/aaron-paul', name: 'Aaron Paul'}}
          ],
          seasons: [
            {
            id: 753,
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/231/579726.jpg',
              original: 'http://static.tvmaze.com/uploads/images/original_untouched/231/579726.jpg'
              }
            }
          ]
        }
      };
      spyOn(service, 'getShowCrewCastDetails').and.returnValue(of(castCrewInfo));
      service.getShowCrewCastDetails(638).subscribe((res) => {
        expect(res).toEqual(castCrewInfo);
      });
    });
  });

  describe('Func: getSearchByKey method ', () => {
    it('should return the list of shows with search as girls', () => {
      spyOn(service, 'getSearchByKey').and.returnValue(of(shows));
      service.getSearchByKey('girls').subscribe((res) => {
        expect(res).toEqual(shows);
      });
    });
  });
});
