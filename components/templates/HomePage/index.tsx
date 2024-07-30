import React from 'react';

import { getPageByLink } from '@/helpers/pullPagesData';

import { PageProps } from '@/types/pages';
import { AboutIntro, FeatureBoxes, HomeHero } from '@/components/sections';

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

	const aboutData = pageData.extraboxes.filter((box) => box.eposition === 3)[0];

	return (
		<main>
			<HomeHero {...heroData} />
			<FeatureBoxes boxesData={featuredBoxesData} />
			<AboutIntro {...aboutData} />
		</main>
	);
};

export default HomePage;
