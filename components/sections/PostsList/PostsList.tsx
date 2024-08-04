import React from 'react';

import { getAllBlogPosts } from '@/helpers/pullBlogPost';

import ImagePlacer from '@/components/ui/ImagePlacer';

import { PostProps } from '@/types/posts';
import SolidButton from '@/components/ui/SolidButton';

const PostsList = async () => {
	const allPosts: PostProps[] = await getAllBlogPosts();

	const sortedPosts = allPosts
		.filter((post) => post.isLive)
		.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));

	return (
		<div className="plitz-container py-10 lg:py-20">
			{sortedPosts.length > 0 &&
				sortedPosts.map((post) => (
					<div
						key={post._id}
						className="grid grid-cols-1 lg:grid-cols-3 mb-20 last:mb-0 shadow-plitz-box-4-32"
					>
						<ImagePlacer imageSrc={post.othersizes.tablet} />
						<div className="relative lg:col-span-2">
							<div className="hidden lg:block h-[10px] bg-plitz-primary"></div>
							<div className="h-full flex flex-col justify-center px-8 lg:px-20 py-8 lg:py-10">
								<h3 className="text-balance mb-3 lg:mb-5">{post.title}</h3>
								<small className="text-plitz-primary mb-7 lg:mb-10">
									By {post.fullname} |{' '}
									{new Date(post.createdAt).toLocaleDateString('en-US', {
										month: 'long',
										day: '2-digit',
										year: 'numeric',
									})}
								</small>
								<div
									dangerouslySetInnerHTML={{ __html: post.postintro }}
									className="text-plitz-body mb-7 lg:mb-10"
								/>
								<div className="flex">
									<SolidButton
										label="Continue Reading"
										href={`/blog/${post.link}`}
									/>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default PostsList;
