import React from 'react';

import { getPostByLink } from '@/helpers/pullBlogPost';

import PostMeta from '@/components/sections/PostsList/PostMeta';

import { PostProps } from '@/types/posts';
import ImagePlacer from '@/components/ui/ImagePlacer';
import { CTARedBg } from '@/components/sections';
import BurgundyThickLine from '@/components/ui/decorations/BurgundyThickLine';
type SinglePostProps = {
	link: string;
};

const SinglePostTemplate = async (props: SinglePostProps) => {
	const postData: PostProps = await getPostByLink(props.link);

	return (
		<main>
			<section className="plitz-container text-center py-10 lg:py-16">
				<div className="flex justify-center mb-5">
					<BurgundyThickLine />
				</div>
				<h1 className="text-balance mb-5">{postData.title}</h1>
				<PostMeta fullname={postData.fullname} createdAt={postData.createdAt} />
				<div className="py-10 max-w-4xl mx-auto">
					<ImagePlacer imageSrc={postData.othersizes.tablet} />
					<div
						dangerouslySetInnerHTML={{ __html: postData.postintro }}
						className="max-w-3xl mx-auto whitespace-pre-wrap text-left font-semibold bg-plitz-silver pt-8 px-10 pb-2"
					/>
					<div
						dangerouslySetInnerHTML={{ __html: postData.content }}
						className="max-w-3xl mx-auto whitespace-pre-wrap text-left mt-5"
					/>
				</div>
			</section>
			<CTARedBg />
		</main>
	);
};

export default SinglePostTemplate;
