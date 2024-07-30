import BurgundyThickLine from '@/components/ui/decorations/BurgundyThickLine';
import OutlinedButton from '@/components/ui/OutlinedButton';
import SolidButton from '@/components/ui/SolidButton';
import altCreator from '@/helpers/altCreator';
import { ExtraBoxesProps } from '@/types/pages';
import Image from 'next/image';
import React from 'react';

export interface AboutIntroProps extends ExtraBoxesProps {
	testId?: string;
}

const AboutIntro = (props: AboutIntroProps) => {
	const { testId = 'AboutIntro', econtent, etitle, esubtitle, eimg } = props;

	const altText = altCreator(eimg as string);

	return (
		<section data-testid={testId} className="">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
				<div className="h-full flex flex-col justify-center lg:col-span-7 text-balance">
					<BurgundyThickLine />
					<p className="text-plitz-primary font-bold mt-10 mb-5">{esubtitle}</p>
					<h3 className="text-balance mb-10">{etitle}</h3>
					<div
						dangerouslySetInnerHTML={{ __html: econtent }}
						className="whitespace-pre-wrap mb-12 lg:mb-16"
					></div>
					<div className="flex flex-col lg:flex-row items-center mb-5 gap-9">
						<SolidButton href="/about-reason4hope" label={'More About Me'} />
						<OutlinedButton
							href="/reason-4-hope-coaching"
							label={'Book A Session'}
						/>
					</div>
				</div>
				<div className="lg:col-span-5">
					<Image
						src={`${process.env.NEXT_PUBLIC_CMS}/${eimg}`}
						alt={altText}
						width={427}
						height={500}
						className="w-full max-w-96 mx-auto lg:max-w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutIntro;
