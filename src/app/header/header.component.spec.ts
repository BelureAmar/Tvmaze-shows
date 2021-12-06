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
    it('should return abc ', () => {
      component.search(show);
      service.getSearch().subscribe(res => {
        expect(res).toBe('show');
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
