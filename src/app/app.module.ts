import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShowsComponent } from './shows/shows.component';
import { API_CONFIG, API_CONFIG_TOKEN } from './apiConfig/api.config';
import { ShowsDataComponent } from './shows-data/shows-data.component';
import { SearchShowsComponent } from './search-shows/search-shows.component';
import { CrewDataComponent } from './crew-data/crew-data.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowsComponent,
    ShowsDataComponent,
    SearchShowsComponent,
    CrewDataComponent,
    PageNotFoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    
      ],
  providers: [
    {
      provide: API_CONFIG_TOKEN,
      useValue: API_CONFIG
    }
    
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
