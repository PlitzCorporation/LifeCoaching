import altCreator from '@/helpers/altCreator';
import { ExtraBoxesProps } from '@/types/pages';
import Image from 'next/image';
import React from 'react';

export interface FeatureBoxesProps {
	boxesData: ExtraBoxesProps[];
}

const FeatureBoxes = (props: FeatureBoxesProps) => {
	return (
		<section className="relative z-10 -mt-8 mb-9">
			<div className="grid grid-cols-12 gap-8 lg:gap-12">
				{props.boxesData.map((box) => (
					<div
						key={box._id}
						className="col-span-12 lg:col-span-6 border-t-10 border-plitz-primary"
					>
						<div className="bg-white py-9 lg:py-12 px-14 lg:px-18 shadow-plitz-box-4-32 h-full">
							<Image
								src={`${process.env.NEXT_PUBLIC_CMS}/${box.eimg}`}
								alt={'icon ' + altCreator(`${box.eimg}`)}
								width={37}
								height={37}
								className="mb-6"
							/>
							<h3 className="font-bold text-primary text-balance">
								{box.etitle}
							</h3>
							<p className="mt-4 whitespace-pre-wrap text-balance">
								{box.econtent}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeatureBoxes;
