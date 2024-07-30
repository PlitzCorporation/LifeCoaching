import { WhiteThickLine } from '@/components/ui/decorations';
import React from 'react';

const QuoteBlock = () => {
	return (
		<div className="bg-gradient-to-b from-plitz-accent to-plitz-secondary py-20 lg:py-40">
			<div className=" max-w-screen-xl plitz-container drop-shadow-plitz-darker text-white text-balance">
				<div className="w-max mx-auto mb-8">
					<WhiteThickLine />
				</div>
				<p className="text-center text-2xl lg:text-4xl font-plitz-font-main font-bold">
					My mission is to help uncover the core, the thing driving behavior and
					choices that have been imprinted in your life. What is the unmet
					emotional need that keeps you in a scramble? If you don’t understand
					or not aware, you won’t be empowered to flourish.
				</p>
			</div>
		</div>
	);
};

export default QuoteBlock;
