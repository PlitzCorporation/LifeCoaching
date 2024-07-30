import RightArrow from '@/components/icons/RightArrow';
import Link from 'next/link';
import React, { MouseEvent } from 'react';

type OutlinedButtonProps = {
	label: string;
	onClick?: (e: MouseEvent<HTMLButtonElement | MouseEvent>) => void;
	href?: string;
	disabled?: boolean;
};

const OutlinedButton = (props: OutlinedButtonProps) => {
	const { label, onClick, href, disabled } = props;

	const commonClasses =
		'relative flex items-center bg-transparent text-white px-9 py-3 lg:py-4 hover:rounded-xl border border-plitz-primary hover:border-plitz-accent transition-all group shadow-2xl';

	const buttonOnly = disabled
		? 'group:pointer-events-none pointer-events-none cursor-not-allowed'
		: 'cursor-pointer';

	return href ? (
		<Link href={href} className={commonClasses}>
			<ButtonLabel label={label} />
			<ButtonIcon />
		</Link>
	) : (
		<button
			onClick={onClick}
			className={commonClasses + buttonOnly}
			disabled={disabled}
		>
			<ButtonLabel label={label.toString()} /> <ButtonIcon />
		</button>
	);
};

const ButtonIcon = () => {
	return (
		<RightArrow className="fill-plitz-primary translate-x-0 opacity-0 group-hover:fill-plitz-accent group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
	);
};

const ButtonLabel = (props: { label: string }) => {
	const { label } = props;
	return (
		<span className="translate-x-2 group-hover:-translate-x-1 transition-all text-plitz-primary group-hover:text-plitz-accent">
			{label}
		</span>
	);
};

export default OutlinedButton;
