export interface CTAProps {
	isLive: boolean;
	order: number;
	title: string;
	subtitle: string;
	details: string;
	featuredimg: string;
	buttons: CTAButton[];
}

export interface CTAButton {
	label: string;
	link: string;
	position: number;
	primary: boolean;
}
