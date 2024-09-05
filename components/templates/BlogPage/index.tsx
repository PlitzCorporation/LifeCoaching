import React from 'react';

import { getPageByLink } from '@/helpers/apiCalls/pullPagesData';

import { ContentOnly, InternalHero, PostsList } from '@/components/sections';

import { PageProps } from '@/types/pages';

const BlogPageTemplate = async () => {
	const pageData: PageProps = await getPageByLink('blog');

	const heroData = {
		title: pageData.title,
		subtitle: pageData.subtitle,
		bgImage: pageData.featuredimg,
	};

	return (
		<main>
			<InternalHero {...heroData} />
			<ContentOnly text={pageData.content} classes="text-center text-white" />
			<PostsList />
		</main>
	);
};

export default BlogPageTemplate;
