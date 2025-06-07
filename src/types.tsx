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
}

export interface IReviewFormState {
    comment: string;
    rating: number;
}

export interface IFavoritesProps {
    places: IPlaceCard[];
}

export type PlaceType = 'Apartment' | 'Room';
