export interface IPlaceCard {
    name: string;
    imageSrc: string;
    imageAlt?: string;
    isPremium?: boolean;
    isBookmarked?: boolean;
    price: number;
    rating: 1 | 2 | 3 | 4 | 5;
    type: PlaceType;
}

export type PlaceType = 'Apartment' | 'Room';