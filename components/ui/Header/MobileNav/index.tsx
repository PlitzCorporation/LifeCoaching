'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { NavProps } from '@/types/pages';

import { useParams } from 'next/navigation';
import SolidButton from '../../SolidButton';

type MobileNavProps = {
	navItems: NavProps[];
};

const MobileNav = (props: MobileNavProps) => {
	const { navItems } = props;

	const currentLocation = useParams();
	const currentPath = currentLocation?.link ? currentLocation.link : '/';

	console.log(currentLocation);

	const [isOpen, setIsOpen] = useState(false);
	const [opacity, setOpacity] = useState('opacity-0');

	const handleClick = () => {
		const bodyTag = document.querySelector('body') as HTMLBodyElement;

		if (!isOpen) {
			setIsOpen(true);
			setTimeout(() => {
				setOpacity('opacity-100');
				bodyTag.style.overflow = 'hidden';
			}, 100);
		} else {
			setOpacity('opacity-0');
			bodyTag.style.overflow = '';

			setTimeout(() => {
				setIsOpen(false);
			}, 200);
		}
	};

	useEffect(() => {
		setIsOpen(false);
		const bodyTag = document.querySelector('body') as HTMLBodyElement;
		bodyTag.style.overflow = '';
	}, [currentLocation]);

	return (
		<>
			<button
				onClick={handleClick}
				className="relative h-full flex flex-col items-end z-50"
			>
				<span
					className={`bg-plitz-primary block transition-all duration-300 ease-out 
                    h-px w-12 rounded-sm ${
											isOpen
												? 'rotate-45 translate-y-2 w-10'
												: '-translate-y-0.5'
										}`}
				></span>
				<span
					className={`bg-plitz-primary block transition-all duration-300 ease-out 
                    h-px w-8 rounded-sm my-2 ${
											isOpen ? 'opacity-0' : 'opacity-100'
										}`}
				></span>
				<span
					className={`bg-plitz-primary block transition-all duration-300 ease-out 
                    h-px w-10 rounded-sm ${
											isOpen
												? '-rotate-45 -translate-y-2.5 w-12'
												: 'translate-y-0.5'
										}`}
				></span>
			</button>

			<div
				className={`${
					isOpen ? 'fixed' : 'hidden'
				} ${opacity} bg-white opacity-95 left-0 top-[97px] h-[calc(100vh-90px)] w-screen p-20 z-40 transition-all duration-200`}
			>
				<nav>
					<ul className="flex flex-col items-center list-none">
						{navItems
							.sort((a, b) => a.position - b.position)
							.map((item) => {
								const homeItem = item.label.includes('Home') && '/';
								return !item.label.includes('Session') ? (
									<li key={item._id} className="py-4">
										<Link
											className={`font-semibold ${
												currentPath === item.link || currentPath === homeItem
													? 'text-plitz-accent'
													: 'text-plitz-primary'
											} font-plitz-font-sec text-lg`}
											href={
												item.label.includes('Home')
													? (homeItem as string)
													: `/${item.link}`
											}
											onClick={handleClick}
										>
											{item.label}
										</Link>
									</li>
								) : (
									<SolidButton
										key={item._id}
										label={item.label}
										href={item.link}
										onClick={handleClick}
									/>
								);
							})}
					</ul>
				</nav>
			</div>
		</>
	);
};

export default MobileNav;
