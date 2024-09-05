export const getAllCtas = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_CMS}/api/sliders`, {
		next: { revalidate: 60 },
		headers: { storedId: 'Reason4HopeCoaching' },
	});

	const data = await res.json();

	return data;
};
