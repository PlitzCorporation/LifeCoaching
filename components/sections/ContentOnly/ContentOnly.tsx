import React from 'react';

interface ContentOnlyProps {
	text: string;
	classes?: string;
}

const ContentOnly = (props: ContentOnlyProps) => {
	const { text } = props;
	return (
		<div className="bg-plitz-primary py-10 lg:py-20">
			<div
				dangerouslySetInnerHTML={{ __html: text }}
				className={`plitz-container text-balance whitespace-pre-wrap max-w-3xl ${props.classes}`}
			></div>
		</div>
	);
};

export default ContentOnly;
