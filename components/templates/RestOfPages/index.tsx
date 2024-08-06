import React from 'react';

import { getPageByLink } from '@/helpers/pullPagesData';

import {
	ContentOnly,
	CTARedBg,
	CustomSectionOne,
	InternalHero,
} from '@/components/sections';

import { PageProps } from '@/types/pages';
type RestOfPagesTemplateProps = {
	currentPage: string;
};

const RestOfPagesTemplate = async (props: RestOfPagesTemplateProps) => {
	const { currentPage } = props;
	const pageData: PageProps = await getPageByLink(currentPage);

	const heroData = {
		title: pageData.title,
		subtitle: pageData.subtitle,
		bgImage: pageData.featuredimg,
	};

	const customSectionOne = pageData.extraboxes.filter(
		(box) => box.eposition === 1,
	)[0];

	return (
		<main>
			<InternalHero {...heroData} />
			<ContentOnly text={pageData.content} classes="text-center text-white" />
			{pageData.extraboxes.length > 0 && (
				<CustomSectionOne {...customSectionOne} />
			)}
			{!currentPage.includes('book') && <CTARedBg />}
		</main>
	);
};

export default RestOfPagesTemplate;
