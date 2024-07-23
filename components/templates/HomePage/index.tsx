import React from 'react';

import { getPageByLink } from '@/helpers/pullPagesData';

import { PageProps } from '@/types/pages';
import { HomeHero } from '@/components/sections';

const HomePage = async () => {
	const pageData: PageProps = await getPageByLink('home');

	const heroData = {
		title: pageData.title,
		subtitle: pageData.subtitle,
		content: pageData.content,
		image: pageData.featuredimg,
	};

	return (
		<main>
			<HomeHero {...heroData} />
		</main>
	);
};

export default HomePage;
