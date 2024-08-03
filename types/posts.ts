// TS
export interface PostsProps {
	error?: string;
	loading?: boolean;
	msg: string;
	blogpost: PostProps;
	blogposts: PostProps[];
}

export interface PostProps {
	_id: string;
	isLive: boolean;
	title: string;
	link: string;
	postintro: string;
	content: string;
	seotitle: string;
	category: ShortCategoryProps[];
	featuredimg: string;
	othersizes: {
		tablet: '';
		mobile: '';
	};
	fullname: string;
	photo: string;
	updatedAt: string;
	createdAt: string;
}

export interface ShortCategoryProps {
	_id: string;
	cattitle: string;
	link: string;
}

export interface CategoryProps {
	_id: string;
	isLive: boolean;
	isMenu: boolean;
	isSubmenu: boolean;
	isUnder: string;
	cattitle: string;
	link: string;
	postintro: string;
	catdescription: string;
	seotitle: string;
	items: PostsByCat[];
	featuredimg: string;
	othersizes: {
		tablet: '';
		mobile: '';
	};
	position: number;
	fullname: string;
	photo: string;
	updatedAt: string;
	createdAt: string;
}

export interface PostsByCat {
	_id: string;
	isLive: boolean;
	title: string;
	link: string;
	postintro: string;
	featuredimg: string;
	createdAt: string;
}
