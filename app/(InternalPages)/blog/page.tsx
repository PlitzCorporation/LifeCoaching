import { Metadata } from 'next';

import { getPageByLink } from '@/helpers/pullPagesData';
import stripHTML from '@/helpers/stripHTML';

import BlogPageTemplate from '@/components/templates/BlogPage';

import { PageProps } from '@/types/pages';

export const generateMetadata = async (): Promise<Metadata> => {
	const blogPage: PageProps = await getPageByLink('blog');

	const content = stripHTML(blogPage.content);
	const shortContent = content.split(' ').slice(0, 25).join(' ');

	return {
		title: blogPage.seotitle,
		description: shortContent,
		openGraph: {
			images: [`https://thedavid.plitz7.com/${blogPage.featuredimg}`],
		},
	};
};

const BlogPage = () => {
	return <BlogPageTemplate />;
};

export default BlogPage;
