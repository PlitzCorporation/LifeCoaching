import React from 'react';
import Image from 'next/image';

import altCreator from '@/helpers/altCreator';

import BurgundyThickLine from '@/components/ui/decorations/BurgundyThickLine';

import { ExtraBoxesProps } from '@/types/pages';

export interface CustomSectionOneProps extends ExtraBoxesProps {
	testId?: string;
}

const CustomSectionOne = (props: CustomSectionOneProps) => {
	const {
		testId = 'CustomSectionOne',
		econtent,
		etitle,
		esubtitle,
		eimg,
	} = props;

	const altText = altCreator(eimg as string);

	return (
		<section data-testid={testId} className="plitz-container py-10 lg:py-20">
			<div className={`grid grid-cols-1 lg:grid-cols-12 gap-14`}>
				<div
					className={`h-full flex flex-col justify-center ${eimg && eimg.includes('placeholder') ? 'lg:col-span-12' : 'lg:col-span-7'} text-balance`}
				>
					<BurgundyThickLine />
					<p className="text-plitz-primary font-bold mt-10 mb-5">{esubtitle}</p>
					<h3 className="text-balance mb-10">{etitle}</h3>
					<div
						dangerouslySetInnerHTML={{ __html: econtent }}
						className="whitespace-pre-wrap mb-12 lg:mb-16"
					></div>
				</div>
				{eimg && !eimg.includes('placeholder') && (
					<div className="lg:col-span-5">
						<Image
							src={`${process.env.NEXT_PUBLIC_CMS}/${eimg}`}
							alt={altText}
							width={427}
							height={500}
							className="w-full max-w-96 mx-auto lg:max-w-full"
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default CustomSectionOne;
