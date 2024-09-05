export const getAllTestimonials = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_CMS}/api/testimonials`, {
		next: { revalidate: 60 },
		headers: { storedId: 'Reason4HopeCoaching' },
	});

	const data = await res.json();

	return data;
};
