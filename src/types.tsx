import { MouseEventHandler } from 'react';

export interface IPlaceCard {
    id: number;
    name: string;
    imageSrc: string;
    imageAlt?: string;
    isPremium?: boolean;
    isBookmarked?: boolean;
    price: number;
    rating: 1 | 2 | 3 | 4 | 5;
    type: PlaceType;
    location: IPoint;
}

export interface IPlaceCardProps {
    place: IPlaceCard;
    isFullSize: boolean;
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
