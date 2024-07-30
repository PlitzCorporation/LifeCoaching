import Image from 'next/image';

import altCreator from '@/helpers/altCreator';
import { WhiteThickLine } from '@/components/ui/decorations';

export interface HomeHeroProps {
	title: string;
	subtitle: string;
	content: string;
	image: string;
}

const HomeHero = (props: HomeHeroProps) => {
	const { title, subtitle, content, image } = props;

	const altText = altCreator(image);

	return (
		<div className="relative h-max md:h-200 lg:h-250 overflow-hidden 3xl:max-w-[95vw] mx-auto bg-plitz-primary">
			<div className="relative lg:absolute z-10 top-0 bottom-0 w-full">
				<div className="plitz-container flex items-center h-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div className="min-h-9"></div>
						<div className="flex flex-col text-left drop-shadow-plitz-darker py-10">
							<WhiteThickLine />
							<h1 className="text-white lg:drop-shadow-plitz-titles mt-6 mb-4">
								{title}
							</h1>
							<h2 className="leading-tight text-white lg:drop-shadow-plitz-titles text-balance mb-8">
								{subtitle}
							</h2>
							<div
								dangerouslySetInnerHTML={{ __html: content }}
								className="text-white lg:drop-shadow-plitz-titles text-balance *:text-2xl lg:*:text-4xl"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="relative h-96 lg:absolute lg:h-full w-full z-0">
				<Image
					src={`${process.env.NEXT_PUBLIC_CMS}/${image}`}
					alt={altText}
					width={0}
					height={0}
					sizes="100vw"
					priority
					className="object-cover object-bottom min-w-full min-h-full max-w-full max-h-full"
				/>
			</div>
		</div>
	);
};

export default HomeHero;
