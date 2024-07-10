export interface IntroSection {
	content: string;
	anchors: AnchorsProps[];
}

export interface AnchorsProps {
	url: string;
	label: string;
	classes?: string;
}

export interface PageHero {
	title: string;
	subtitle: string;
	cta: {
		url: string;
		label: string;
	};
	featuredImage: string;
	otherSizes: {
		mobile: string;
		tablet: string;
	};
}
