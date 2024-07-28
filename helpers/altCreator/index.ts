const altCreator = (imageUri: string) => {
	const altText = imageUri
		.replace('uploads/Reason4HopeCoaching/', '')
		.replace(/\.(webp|jpg|png|svg)/g, '')
		.replace(/-/g, ' ');

	return altText;
};

export default altCreator;
