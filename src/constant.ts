import {CityName, ICity} from './types.ts';

export enum Actions {
  CITY = 'City',
  OFFERS = 'Offers',
  OFFER = 'Offer',
  FAVORITES = 'Favorites',
  COMMENTS = 'Comments',
  USER = 'User'
}

export const CITIES: Record<CityName, ICity> = {
  Paris: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 12
    }
  },
  Cologne: {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 12
    }
  },
  Brussels: {
    name: 'Brussels',
    location: {
      latitude: 50.8476,
      longitude: 4.3572,
      zoom: 10
    }
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.374,
      longitude: 4.89,
      zoom: 10
    }
  },
  Hamburg: {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 10
    }
  },
  Dusseldorf: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 10
    }
  },
};


export const API_ROUTES = {
  OFFERS: {
    ALL: '/offers',
    EXACT: '/offers/{offerId}',
    NEARBY: '/offers/{offerId}/nearby',
  },
  FAVORITE: {
    GET: '/favorite',
    SET_STATUS: '/favorite/{offerId}/{status}',
  },
  COMMENTS: {
    GET: '/comments/{offerId}',
    POST: '/comments/{offerId}',
  },
  USER: {
    VALIDATE: '/login',
    LOGIN: '/login',
    LOGOUT: '/logout',
  },
};
