import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { API_CONFIG, API_CONFIG_TOKEN } from '../apiConfig/api.config';
import { ServiceService } from '../services/service.service';

import { ShowsComponent } from './shows.component';

describe('ShowsComponent', () => {
  let component: ShowsComponent;
  let fixture: ComponentFixture<ShowsComponent>;
  let service: ServiceService;
  const show = {
      id: 1,
      url: "https://www.tvmaze.com/shows/1/under-the-dome",
      name: "Under the Dome",
      type: "Scripted",
      language: "English",
      genres: [
          "Drama",
          "Science-Fiction",
          "Thriller"
      ],
      status: "Ended",
      runtime: 60,
      averageRuntime: 60,
      premiered: "2013-06-24",
      ended: "2015-09-10",
      officialSite: "http://www.cbs.com/shows/under-the-dome/",
      schedule: {
          time: "22:00",
          days: [
              "Thursday"
          ]
      },
      rating: {
          average: 6.5
      },
      weight: 98,
      network: {
          id: 2,
          name: "CBS",
          country: {
              name: "United States",
              code: "US",
              timezone: "America/New_York"
          }
      },
      webChannel: null,
      dvdCountry: null,
      externals: {
          tvrage: 25988,
          thetvdb: 264492,
          imdb: "tt1553656"
      },
      image: {
          medium: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          original: "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
      },
      summary: "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
      updated: 1631010933,
      _links: {
          self: {
              href: "https://api.tvmaze.com/shows/1"
          },
          previousepisode: {
              href: "https://api.tvmaze.com/episodes/185054"
          }
      },
      _embedded: {
          seasons: [
              {
                  id: 1,
                  url: "https://www.tvmaze.com/seasons/1/under-the-dome-season-1",
                  number: 1,
                  name: "",
                  episodeOrder: 13,
                  premiereDate: "2013-06-24",
                  endDate: "2013-09-16",
                  network: {
                      id: 2,
                      name: "CBS",
                      country: {
                          name: "United States",
                          code: "US",
                          timezone: "America/New_York"
                      }
                  },
                  webChannel: null,
                  image: {
                      medium: "https://static.tvmaze.com/uploads/images/medium_portrait/24/60941.jpg",
                      original: "https://static.tvmaze.com/uploads/images/original_untouched/24/60941.jpg"
                  },
                  summary: "",
                  _links: {
                      self: {
                          href: "https://api.tvmaze.com/seasons/1"
                      }
                  }
              }
              
          ]
        },
          
                person: {
                      id: 1,
                      url: "https://www.tvmaze.com/people/1/mike-vogel",
                      name: "Mike Vogel",
                      country: {
                          name: "United States",
                          code: "US",
                          timezone: "America/New_York"
                      },
                      birthday: "1979-07-17",
                      deathday: null,
                      gender: "Male",
                      image: {
                          medium: "https://static.tvmaze.com/uploads/images/medium_portrait/0/1815.jpg",
                          original: "https://static.tvmaze.com/uploads/images/original_untouched/0/1815.jpg"
                      },
                      updated: 1634211735,
                      _links: {
                          self: {
                              href: "https://api.tvmaze.com/people/1"
                          }
                      }
              },        
          
      }

    
  const shows = [
    {...show}, {...show, id: 1217, rating: {average: 5.4}}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ ShowsComponent ],
      providers: [
        ServiceService,
        {provide: API_CONFIG_TOKEN, useValue: API_CONFIG},
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsComponent);
    service = TestBed.inject(ServiceService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Func: getPopularShows method ', () => {
    it('should return the list of shows whose rating is greater than or equal to 8 ', () => {
      const popularShows = [
        {
          ...show,
          id: 1,
          name: 'Under the Dome',
          rating: {
            average: 9.5
          },
        },
        {
          ...show,
          id: 2,
          name: 'Breaking Bad',
          rating: {
            average: 9.8
          }
        },
        {
          ...show,
          id: 2,
          name: 'abc carousel',
          rating: {
            average: 5.8
          }
        }
      ];
      spyOn(service, 'getShow').and.returnValue(of(popularShows));
      component.getPopularShows();
      component.popularShows$.subscribe(res => {
        expect(res.length).toEqual(2);
      });
    });

    it('should return the list of popular shows ', () => {
      const popularShows = [
        {
          ...show,
          id: 2,
          name: 'abc carousel',
          rating: {
            average: 5.8
          }
        }
      ];
      spyOn(service, 'getShow').and.returnValue(of(popularShows));
      component.getPopularShows();
      component.popularShows$.subscribe(res => {
        expect(res.length).toEqual(0);
      });
    });
  });

  describe('Func: arrangeShows method ', () => {
    it('should return the shows filtered by unique genres ', () => {
      const popularShows = [
        {...show, id: 1217}
      ];
      const result = component.arrangeShows(shows, popularShows);
      expect(result.length).toEqual(4);
      expect(result[0].name).toEqual('Popular Shows');
    });

    it('should return shows sorted by rating', () => {
      const popularShows = [
        {...show, id: 1217}
      ];
      const result = component.arrangeShows(shows, popularShows);
      expect(result.length).toEqual(4);
      expect(result[result.length - 1].list[result[result.length - 1].list.length - 1].rating.average).toEqual(5.4);
    });
  });

  describe('Func: getUniqueGenres method ', () => {
    it('should return unique genres', () => {
      const result = component.getUniqueGenres(shows);
      expect(result.length).toEqual(3);
      expect(result).toContain('Drama');
    });

    it('should return unique genres of length is 0 with input as empty array', () => {
      const result = component.getUniqueGenres([{...show, genres: []}]);
      expect(result.length).toEqual(0);
    });
  });

  describe('Func: groupByUniqueGenres method ', () => {
    it('should return the filtered shows by unique genres', () => {
      const uniqueGenres = [
        'Drama',
        'Science-Fiction',
        'Thriller'
      ];
      const result = component.groupByUniqueGenres(uniqueGenres, shows);
      expect(result.length).toEqual(3);
      expect(result[0].list.length).toEqual(2);
    });

    it('should return the empty list of shows when we call with empty genres', () => {
      const uniqueGenres = [];
      const result = component.groupByUniqueGenres(uniqueGenres, shows);
      expect(result.length).toEqual(0);
    });
  });

});
