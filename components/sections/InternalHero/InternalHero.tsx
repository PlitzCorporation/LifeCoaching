import Image from 'next/image';
import React from 'react';

import altCreator from '@/helpers/altCreator';
import { WhiteThickLine } from '@/components/ui/decorations';

export interface InternalHeroProps {
	title: string;
	subtitle?: string;
	bgImage: string;
}

const InternalHero = (props: InternalHeroProps) => {
	const altText = altCreator(props.bgImage);

	return (
		<section className="relative h-96 lg:h-150">
			<div className="absolute w-full top-0 bottom-0 z-20">
				<div className="plitz-container flex flex-col justify-center items-center text-center relative h-full">
					<WhiteThickLine />
					<h1 className="text-white drop-shadow-plitz-darker mt-5 lg:mt-7 mb-7">
						{props.title}
					</h1>
					<h2 className="text-plitz-secondary drop-shadow-plitz-darker text-2xl lg:text-4xl text-balance">
						{props.subtitle}
					</h2>
				</div>
			</div>

			<div className="absolute w-full top-0 bottom-0 z-10 bg-gradient-to-b from-plitz-primary/50 to-plitz-body/90"></div>

			<div className="relative h-96 lg:absolute lg:h-150 w-full z-0">
				<Image
					src={
						!props.bgImage.includes('placeholder')
							? `${process.env.NEXT_PUBLIC_CMS}/${props.bgImage}`
							: `/images/big-placeholder.jpg`
					}
					alt={altText}
					width={0}
					height={0}
					sizes="100vw"
					priority
					className="object-cover object-bottom min-w-full min-h-full max-w-full max-h-full"
				/>
			</div>
		</section>
	);
};

export default InternalHero;
