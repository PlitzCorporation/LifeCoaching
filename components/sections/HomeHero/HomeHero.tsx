import Image from 'next/image';

import altCreator from '@/helpers/altCreator';
import { WhiteThickLine } from '@/components/ui/decorations';

type Props = {
	title: string;
	subtitle: string;
	content: string;
	image: string;
};

const HomeHero = (props: Props) => {
	const { title, subtitle, content, image } = props;

	const altText = altCreator(image);

	return (
		<div className="relative h-150 md:h-200 lg:h-250 overflow-hidden 3xl:max-w-[80vw] mx-auto">
			<div className="absolute h-full w-full z-0">
				<Image
					src={`${process.env.NEXT_PUBLIC_CMS}/${image}`}
					alt={altText}
					width={1500}
					height={1000}
					className="object-cover object-bottom min-w-full min-h-full max-w-full max-h-full"
				/>
			</div>
			<div className="absolute z-10 top-0 bottom-0 w-full">
				<div className="plitz-container flex items-center h-full">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div className="min-h-9"></div>
						<div className="flex flex-col text-left max-lg:pl-[25vw] drop-shadow-plitz-darker">
							<WhiteThickLine />
							<h1 className="text-white drop-shadow-plitz-titles mt-6 mb-4">
								{title}
							</h1>
							<h2 className="leading-tight text-white drop-shadow-plitz-titles text-balance mb-8">
								{subtitle}
							</h2>
							<div
								dangerouslySetInnerHTML={{ __html: content }}
								className="text-white drop-shadow-plitz-titles text-balance *:text-2xl lg:*:text-4xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeHero;
