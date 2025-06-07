import { MouseEventHandler } from 'react';

export type TRating = 1 | 2 | 3 | 4 | 5;

export interface IPlaceCard {
    id: number;
    name: string;
    imageSrc: string;
    imageAlt?: string;
    isPremium?: boolean;
    isBookmarked?: boolean;
    price: number;
    rating: TRating;
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
    onListItemHover: (listItemName: number | null) => void;
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
}

export type PlaceType = 'Apartment' | 'Room';

export interface IMapProps {
    city: ICity;
    places: IPlaceCard[];
    selectedPlace: IPlaceCard | undefined;
}

export interface IRatingProps {
    rating: TRating;
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
    rating: TRating;
}
