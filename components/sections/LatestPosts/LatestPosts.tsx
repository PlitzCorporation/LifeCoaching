import React from 'react';
import Link from 'next/link';

import { getPostsByCategory } from '@/helpers/pullBlogPost';

import BurgundyThickLine from '@/components/ui/decorations/BurgundyThickLine';
import ImagePlacer from '@/components/ui/ImagePlacer';
import SolidButton from '@/components/ui/SolidButton';

import { CategoryProps } from '@/types/posts';

const LatestPosts = async () => {
	const posts: CategoryProps = await getPostsByCategory('home-featured');

	const latestPosts = posts.items
		.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
		.slice(0, 3);

	return (
		<section>
			<div className="plitz-container flex flex-col items-center py-16 lg:py-28">
				<BurgundyThickLine />
				<div className="text-plitz-primary font-bold mt-7 lg:mt-10 mb-4">
					The Blog
				</div>
				<h3 className="mb-11 lg:mb-20">Latest Posts</h3>
				<div className="grid mb-9 lg:mb-12 grid-cols-1 gap-14 lg:grid-cols-3">
					{latestPosts.map((post) => (
						<Link
							href={`/blog/${post.link}`}
							key={post._id}
							className="flex flex-col items-center shadow-plitz-box-4-32 group"
						>
							<div className="w-full h-60">
								<ImagePlacer imageSrc={post.featuredimg} />
							</div>
							<div className=" px-6 lg:px-10 py-7 lg:py-9">
								<small className="text-plitz-primary">
									{new Date(post.createdAt).toLocaleDateString('en-US', {
										month: 'long',
										day: '2-digit',
										year: 'numeric',
									})}
								</small>
								<h4 className="text-2xl mt-4 mb-5 lg:text-3xl text-balance group-hover:text-plitz-primary transition-all group-hover:transition-all">
									{post.title}
								</h4>
								<div
									dangerouslySetInnerHTML={{ __html: post.postintro }}
									className="text-ellipsis line-clamp-3 text-plitz-body [&>p]:font-normal group-hover:text-plitz-primary"
								></div>
							</div>
						</Link>
					))}
				</div>
				<SolidButton label="View All Posts" href="/blog" />
			</div>
		</section>
	);
};

export default LatestPosts;
