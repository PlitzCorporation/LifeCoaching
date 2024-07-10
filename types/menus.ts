import { allImages } from './images';

export interface MenuCategoryProps {
	_id: string;
	user: string;
	isLive: boolean;
	categoryTitle: string;
	categoryDescription: string;
	position: number;
	items: MenuItem[];
	featuredImage: allImages;
}

export interface MenuItem {
	_id: string;
	user: string;
	isLive: boolean;
	title: string;
	subtitle: string;
	description: string;
	position: number;
	locations: string[];
	options: Options[];
	features: Features[];
	categories: string[];
	featuredImg: allImages;
}

export interface Options {
	optionTitle: string;
	optionSubtitle: string;
	price: number;
	isAvailable: boolean;
	_id: string;
}

export interface Features {
	label: string;
	description: string;
	_id: string;
}
