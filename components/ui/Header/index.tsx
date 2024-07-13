import React from 'react';
import Link from 'next/link';

import { getAllPages } from '@/helpers/pullPagesData';

import { NavProps, PageProps } from '@/types/pages';

import SolidButton from '../SolidButton';
import MobileNav from './MobileNav';

const Header = async () => {
	const pages: PageProps[] = await getAllPages();

	const filteredPages = pages.filter((page) => page.isMenu && page.isLive);

	const menuPages: NavProps[] = filteredPages.sort(
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
					<nav className="hidden md:block">
						{menuPages.map((page) =>
							!page.label.includes('Session') ? (
								<Link
									key={page._id}
									href={page.label === 'Home' ? '/' : page.link}
									className="text-plitz-primary my-7 md:my-0 md:ml-5 lg:ml-11 first:ml-0 font-plitz-font-main font-semibold"
								>
									{page.label}
								</Link>
							) : (
								<div key={page._id} className="inline-flex md:ml-5 lg:ml-11">
									<SolidButton label={page.label} href={page.link} />
								</div>
							),
						)}
					</nav>

					<div className="h-full md:hidden">
						<MobileNav navItems={menuPages} />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
