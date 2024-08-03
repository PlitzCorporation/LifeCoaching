import React from 'react';
import { getAllBlogPosts } from '@/helpers/pullBlogPost';
import { PostProps } from '@/types/posts';

const LatestPosts = async () => {
	const posts: PostProps[] = await getAllBlogPosts();

	const latestPosts = posts
		.sort(
			(a, b) =>
				new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
		)
		.slice(0, 3);

	console.log(latestPosts);

	return (
		<section>
			<h3>Latest Posts</h3>
		</section>
	);
};

export default LatestPosts;
