const stripHTML = (content: string) => {
	const plainContent = content?.replace(/<\/*[^>]+(>|$)/g, '') ?? '';

	return plainContent;
};

export default stripHTML;
