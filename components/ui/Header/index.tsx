import React from 'react';
import Link from 'next/link';

import { getAllPages } from '@/helpers/pullPagesData';

import { NavProps, PageProps } from '@/types/pages';

const Header = async () => {
	const pages: PageProps[] = await getAllPages();

	const menuPages: NavProps[] = [...pages].sort(
		(a, b) => a.position - b.position,
	);

	return (
		<header className="shadow-plitz-box">
			<div className="plitz-container">
				<div className="flex justify-between flex-row items-center py-5">
					<Link
						href={'/'}
						className="w-[200px] h-[50px] block bg-plitz-body"
					></Link>
					<nav>
						{menuPages.map(
							(page) =>
								page.isMenu &&
								page.isLive && (
									<Link
										key={page._id}
										href={page.label === 'Home' ? '/' : page.link}
										className="text-plitz-primary font-plitz-font-main font-semibold"
									>
										{page.label}
									</Link>
								),
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
