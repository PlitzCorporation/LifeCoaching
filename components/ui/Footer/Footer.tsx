import React from 'react';
import Link from 'next/link';

import { getAllPages } from '@/helpers/pullPagesData';

import PlitzLogo from '@/components/logos/PlitzLogo';
import Reason4Hope from '@/components/logos/Reason4Hope';

import { PageProps } from '@/types/pages';

const Footer = async () => {
	const pages: PageProps[] = await getAllPages();

	const livePages = pages
		.filter(
			(page) => (page.isLive && page.isMenu) || (page.isLive && page.isSubmenu),
		)
		.sort((a, b) => a.position - b.position);

	return (
		<footer className="bg-plitz-silver">
			<div className="plitz-container flex flex-col justify-center items-center pt-12 lg:pt-24 pb-10 lg:pb-14">
				<Link href={'/'} className="mb-8">
					<Reason4Hope className="w-32" />
				</Link>
				<ul className="flex flex-row flex-wrap w-full justify-center items-center mb-10 lg:mb-24">
					{livePages.map((page) => (
						<li key={page._id} className="mx-2 lg:mx-5">
							<Link
								href={page.label.includes('Home') ? '/' : `/${page.link}`}
								className="text-plitz-primary hover:text-plitz-accent transition-all"
							>
								{page.label}
							</Link>
						</li>
					))}
				</ul>
				<div className="flex flex-col lg:flex-row text-center justify-center items-center text-sm text-balance">
					2024 © Reason4Hope Coaching by Brenda Silva | Website by
					<Link
						href={'https://plitz7.com'}
						className="inline-flex ml-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<PlitzLogo className="w-16 fill-plitz-body max-lg:mt-3" />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
