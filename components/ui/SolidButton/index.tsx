import RightArrow from '@/components/icons/RightArrow';
import Link from 'next/link';
import React from 'react';

interface SolidButtonProps {
	label: string;
	href?: string;
	onClick?: () => void;
}

const ButtonIcon = () => {
	return (
		<RightArrow className="fill-white translate-x-0 opacity-0 group-hover:fill-plitz-accent group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
	);
};

const ButtonLabel = (props: { label: string }) => {
	const { label } = props;
	return (
		<span className="translate-x-2 group-hover:-translate-x-1 transition-all">
			{label}
		</span>
	);
};

const SolidButton = (props: SolidButtonProps) => {
	const { label, onClick, href } = props;

	const commonClasses =
		'relative flex items-center bg-plitz-primary text-white px-5 py-3 hover:rounded-xl border border-plitz-primary md:px-7 lg:px-9 md:py-4 hover:border-plitz-accent hover:text-plitz-accent hover:bg-white transition-all hover:transition-all group shadow-2xl';

	return href ? (
		<Link href={href} className={commonClasses}>
			<ButtonLabel label={label} />
			<ButtonIcon />
		</Link>
	) : (
		<button onClick={onClick} className={commonClasses}>
			<ButtonLabel label={label} /> <ButtonIcon />
		</button>
	);
};

export default SolidButton;
