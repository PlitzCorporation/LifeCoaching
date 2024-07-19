import React from 'react';

import { getPageByLink } from '@/helpers/pullPagesData';

import PlitzLogo from '@/components/logos/PlitzLogo';

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
			<div className="flex flex-col justify-center items-center text-center">
				<PlitzLogo className="w-14" />
				<p className="py-4">Plitz Corporation © 2024</p>
			</div>
		</main>
	);
};

export default HomePage;
