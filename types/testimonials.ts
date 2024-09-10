export interface TestimonialProps {
	_id: string;
	isLive: boolean;
	order: number;
	details: string;
	author: string;
	createdAt: string;
	picture?: string;
	rating?: number;
	source?: string;
	company?: string;
	worktitle?: string;
}
