import { allImages } from './images';
import { LocationProps } from './locations';

export interface SpecialProps {
	_id: string;
	isLive: boolean;
	title: string;
	subtitle: string;
	description: string;
	position: number;
	discount: number;
	discountType: string;
	disclaimer: string;
	products?: Products[];
	locations?: LocationProps[];
	featuredImage?: allImages;
}

export interface Products {
	product: string;
	quantity: number;
	dineInOnly: boolean;
	priceOverride: number;
	_id: string;
}
