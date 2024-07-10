import { allImages } from './images';

export interface LocationProps {
	_id: string;
	isLive: boolean;
	position: number;
	locationName: string;
	seoTitle: string;
	link: string;
	address: string;
	phones: PhoneNumber[];
	schedule: string;
	featuredImg: allImages;
	gallery: allImages[];
}

export interface PhoneNumber {
	phone: string;
	primary: boolean;
}
