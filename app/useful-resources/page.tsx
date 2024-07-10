import ImagePlacer from '@/components/ui/ImagePlacer';
import OutlinedButton from '@/components/ui/OutlinedButton';
import SolidButton from '@/components/ui/SolidButton';

import SampleImage from '@/public/images/plitz-splash-false-700x700.jpg';

const UsefulResourcesPage = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center px-10 py-10">
			<h1>Premade Components!</h1>
			<div className="relative flex flex-col max-w-96 my-20">
				<p className="mb-7">Image placeholder if nothing is passed</p>
				<div className="mb-20">
					<ImagePlacer imageSrc={''} />
				</div>
				<p className="mb-7">Showing the right image when a path props exists</p>
				<div className="mb-10">
					<ImagePlacer imageSrc={SampleImage} isLocal />
				</div>
			</div>
			<div>
				<p className="mb-7">Buttons</p>
				<div className="flex max-sm:flex-col gap-5">
					<SolidButton label="Go back home" href="/" />
					<OutlinedButton label="Go back home" href="/" />
				</div>
			</div>
		</div>
	);
};

export default UsefulResourcesPage;
