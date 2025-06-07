import { MouseEventHandler } from 'react';

export interface IPlaceCard {
    id: string;
    title: string;
    previewImage: string;
    isPremium?: boolean;
    isFavorite?: boolean;
    price: number;
    rating: number;
    type: PlaceType;
    location: IPoint;
    city: ICity;
}

export interface IPlaceCardProps {
    place: IPlaceCard;
    placeCardType: PlaceClassTypes;
    onMouseOver?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
}

export interface IReviewRatingProps {
    value: number;
    onChange: (field: string, value: number) => void;
}

export interface IOfferListProps {
    offers: IPlaceCard[];
    onListItemHover: (listItemName: string | null) => void;
    listType: PlaceClassTypes;
}

export interface IReviewFormState {
    comment: string;
    rating: number;
}

export interface IFavoritesProps {
    places: IPlaceCard[];
}

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export interface ICity {
    name: CityName;
    location: IPoint;
}

export interface IPoint {
    latitude: number;
    longitude: number;
    zoom?: number;
}

export type PlaceType = 'apartment' | 'room' | 'house' | 'hpreviewImage: string;otel';

export interface IMapProps {
    city: ICity;
    places: IPlaceCard[];
    selectedPlace: IPlaceCard | undefined;
}

export interface IRatingProps {
    rating: number;
    objectType: string;
}

export interface IReviewsListProps {
    reviews: IReview[];
}

export interface IReviewItemProps {
    review: IReview;
}

export enum OBJECT_CLASS_TYPES {
    Place = 'place-card',
    Reviews = 'reviews',
    Offer = 'offer'
}

export enum PlaceClassTypes {
    Cities = 'cities',
    NearPlaces = 'near-places',
    Favorites = 'favorites'
}


export enum SortName {
    popular = 'popular',
    lowToHigh = 'lowToHigh',
    highToLow = 'highToLow',
    topRated = 'topRated',
  }

type User = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
}

export interface IReview {
    id: number;
    date: Date;
    user: User;
    comment: string;
    rating: number;
}
