import React from 'react';

import { getAllCtas } from '@/helpers/pullCtasData';

import OutlinedButton from '@/components/ui/OutlinedButton';
import SolidButton from '@/components/ui/SolidButton';

import { CTAProps } from '@/types/ctas';

const CTARedBg = async () => {
	const cta: CTAProps[] = await getAllCtas();

	const ctaData = cta.filter((cta) => cta.order === 1)[0];

	return (
		<section className="bg-gradient-to-b from-plitz-primary to-[#4B1322] py-16 lg:py-32">
			<div className="plitz-container flex flex-col items-center text-center">
				<h3 className="text-plitz-secondary max-w-4xl mb-5">{ctaData.title}</h3>
				<div
					dangerouslySetInnerHTML={{ __html: ctaData.details }}
					className="text-white text-balance drop-shadow-plitz-darker max-w-4xl mb-10 lg:mb-16"
				></div>
				<div className="flex justify-center items-center">
					{ctaData.buttons
						.sort((a, b) => a.position - b.position)
						.map((button) =>
							button.primary ? (
								<SolidButton
									key={button.link}
									href={button.link}
									label={button.label}
									extraClasses="bg-white [&>span]:text-plitz-primary [&>span]:hover:text-plitz-accent"
								/>
							) : (
								<OutlinedButton
									key={button.link}
									href={button.link}
									label={button.label}
									extraClasses="border-white [&>span]:text-white"
								/>
							),
						)}
				</div>
			</div>
		</section>
	);
};

export default CTARedBg;
