import { InjectionToken } from '@angular/core';

export const API_CONFIG = {
    SHOWS: '/shows',
    SEARCH_SHOWS: '/search/shows?q=',
    CREW_CAST_SEASON_DETAILS: '?embed[]=seasons&embed[]=cast&embed[]=crew'
};


export const API_CONFIG_TOKEN = new InjectionToken<typeof API_CONFIG>('api.config');
