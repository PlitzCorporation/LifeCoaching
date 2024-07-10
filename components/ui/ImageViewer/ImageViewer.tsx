'use client';

import React from 'react';
import ImagePlacer from '../ImagePlacer';
import CloseEx from '@/components/icons/CloseEx';

type ImageViewerProps = {
	imageSrc: string;
	isOpen: boolean;
	opacity: string;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setOpacity: React.Dispatch<React.SetStateAction<string>>;
	setCurrentImage: React.Dispatch<React.SetStateAction<string>>;
};

const ImageViewer = (props: ImageViewerProps) => {
	const { imageSrc, isOpen, opacity, setIsOpen, setOpacity, setCurrentImage } =
		props;

	const handleClick = () => {
		const bodyTag = document.querySelector('body') as HTMLBodyElement;

		bodyTag.style.overflow = '';
		setOpacity('opacity-0');

		setTimeout(() => {
			setCurrentImage('');
			setIsOpen(false);
		}, 200);
	};

	return (
		<div
			className={`${
				isOpen ? 'fixed' : 'hidden'
			} ${opacity} bg-plitz-bgs-darker left-0 top-0 backdrop-blur-xl h-screen w-screen p-20 z-40 transition-all duration-200`}
		>
			<div className="absolute left-1/2 -translate-x-1/2 flex justify-end top-0 w-11/12 z-50">
				<button
					className="px-7 py-4 bg-plitz-green rounded-b-2xl text-3xl"
					onClick={handleClick}
				>
					<CloseEx className="w-7 h-7 fill-plitz-blue" />
				</button>
			</div>
			<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12">
				<ImagePlacer imageSrc={imageSrc} />
			</div>
		</div>
	);
};

export default ImageViewer;
