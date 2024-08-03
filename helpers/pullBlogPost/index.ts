export const getAllBlogPosts = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/td/api/blogposts`, {
		next: { revalidate: 60 },
		headers: { storedId: 'Reason4HopeCoaching' },
	});

	const data = await res.json();

	return data;
};

export const getPostByLink = async (link: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_URL}/td/api/blogposts/${link}`,
		{
			next: { revalidate: 60 },
			headers: { storedId: 'Reason4HopeCoaching' },
		},
	);

	if (res.status === 404) {
		return new Error('Page not found');
	}

	if (!res.ok) {
		return new Error('An error occurred while fetching the data');
	}

	const data = await res.json();

	return data;
};

export const getPostsByCategory = async (categoryLink: string) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_URL}/td/api/categories/${categoryLink}`,
		{
			next: { revalidate: 60 },
			headers: { storedId: 'Reason4HopeCoaching' },
		},
	);

	const data = await res.json();

	return data;
};
