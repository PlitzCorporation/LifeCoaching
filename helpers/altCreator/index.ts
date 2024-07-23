const altCreator = (imageUri: string) => {
	const altText = imageUri
		.replace('uploads/', '')
		.replace(/\.(webp|jpg|png)/g, '')
		.replace(/-/g, ' ');

	return altText;
};

export default altCreator;
