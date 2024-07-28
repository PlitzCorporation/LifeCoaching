import React from 'react';

import { getPageByLink } from '@/helpers/pullPagesData';

import { PageProps } from '@/types/pages';
import { FeatureBoxes, HomeHero } from '@/components/sections';

const HomePage = async () => {
	const pageData: PageProps = await getPageByLink('home');

	const heroData = {
		title: pageData.title,
		subtitle: pageData.subtitle,
		content: pageData.content,
		image: pageData.featuredimg,
	};

	const featuredBoxesData = pageData.extraboxes
		.filter((box) => box.esubtitle === 'featuredBox')
		.sort((a, b) => a.eposition - b.eposition);

	return (
		<main>
			<HomeHero {...heroData} />
			<FeatureBoxes boxesData={featuredBoxesData} />
		</main>
	);
};

export default HomePage;
