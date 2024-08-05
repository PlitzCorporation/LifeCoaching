import React from 'react';

type Props = {
	fullname: string;
	createdAt: string;
};

const PostMeta = (props: Props) => {
	const { fullname, createdAt } = props;
	return (
		<small className="text-plitz-primary mb-7 lg:mb-10">
			By {fullname} |{' '}
			{new Date(createdAt).toLocaleDateString('en-US', {
				month: 'long',
				day: '2-digit',
				year: 'numeric',
			})}
		</small>
	);
};

export default PostMeta;
