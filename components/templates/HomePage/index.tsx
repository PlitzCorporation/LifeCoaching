import React from 'react';

import PlitzLogo from '@/components/logos/PlitzLogo';

const HomePage = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-10 lg:p-24">
			<h1 className="text-center text-balance w-2/3 mb-7">Reason 4 Hope</h1>
			<div className="w-full lg:w-2/4 flex flex-col items-center justify-center">
				<h2 className="text-center mb-7">Website development in progress</h2>
			</div>
			<div className="flex flex-col justify-center items-center text-center">
				<PlitzLogo className="w-14" />
				<p className="py-4">Plitz Corporation © 2024</p>
			</div>
		</main>
	);
};

export default HomePage;
