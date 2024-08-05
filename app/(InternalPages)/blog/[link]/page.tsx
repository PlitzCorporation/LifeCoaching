import { Metadata } from 'next';

import { getPostByLink } from '@/helpers/pullBlogPost';

import stripHTML from '@/helpers/stripHTML';

import SinglePostTemplate from '@/components/templates/SinglePost';

import { PostProps } from '@/types/posts';
type MetaDataProps = {
	params: {
		link: string;
	};
};

export const generateMetadata = async (
	props: MetaDataProps,
): Promise<Metadata> => {
	const {
		params: { link },
	} = props;
	const blogPage: PostProps = await getPostByLink(link);

	const content = stripHTML(blogPage.content);
	const shortContent = content.split(' ').slice(0, 25).join(' ');

	return {
		title: `${blogPage.seotitle} | Reason4Hope Coaching`,
		description: shortContent,
		openGraph: {
			images: [`https://thedavid.plitz7.com/${blogPage.featuredimg}`],
		},
	};
};

const BlogPage = (props: MetaDataProps) => {
	const currentPost = props.params.link;
	return <SinglePostTemplate link={currentPost} />;
};

export default BlogPage;
