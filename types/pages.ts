export interface PageProps extends NavProps {
	title: string;
	subtitle: string;
	content: string;
	seotitle: string;
	extraboxes: ExtraBoxesProps[];
	featuredimg: string;
	othersizes: {
		tablet: '';
		mobile: '';
	};
	fullname: string;
	photo: string;
	gallery: [];
	updatedAt: string;
	createdAt: string;
}

export interface NavProps {
	_id: string;
	position: number;
	label: string;
	isLive: boolean;
	isMenu: boolean;
	isSubmenu?: boolean;
	isUnder?: string;
	link: string;
}

export interface ExtraBoxesProps {
	_id: string;
	econtent: string;
	eposition: number;
	esubtitle: string;
	eimg?: string;
	etitle: string;
	updatedAt?: string;
	createdAt?: string;
}
