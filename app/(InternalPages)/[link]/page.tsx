import { Metadata } from 'next';

import { getPageByLink } from '@/helpers/pullPagesData';
import stripHTML from '@/helpers/stripHTML';

import RestOfPagesTemplate from '@/components/templates/RestOfPages';

import { PageProps } from '@/types/pages';
export interface AllPagesProps {
	params: {
		link: string;
	};
}
export const generateMetadata = async ({
	params,
}: AllPagesProps): Promise<Metadata> => {
	const currentPage: PageProps = await getPageByLink(params.link);

	const content = stripHTML(currentPage.content);
	const shortContent = content.split(' ').slice(0, 25).join(' ');

	return {
		title: currentPage.seotitle,
		description: shortContent,
		openGraph: {
			images: [`https://thedavid.plitz7.com/${currentPage.featuredimg}`],
		},
	};
};

const AllPages = ({ params }: AllPagesProps) => {
	return <RestOfPagesTemplate currentPage={params.link} />;
};

export default AllPages;
