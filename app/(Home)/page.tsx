import { Metadata } from 'next';

import { getPageByLink } from '@/helpers/pullPagesData';

import HomePage from '@/components/templates/HomePage';

import { PageProps } from '@/types/pages';

export const generateMetadata = async (): Promise<Metadata> => {
	const pageData: PageProps = await getPageByLink('home');

	return {
		title: pageData.seotitle,
		description: pageData?.content?.replace(/<\/*[^>]+(>|$)/g, '') ?? '',
	};
};

export default function Home() {
	return <HomePage />;
}
