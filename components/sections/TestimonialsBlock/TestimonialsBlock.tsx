import React from 'react';

import { getAllTestimonials } from '@/helpers/apiCalls/pullTestimonialsData';

import { WhiteThickLine } from '@/components/ui/decorations';
import TestimonialsCarousel from './TestimonialsCarousel';

import { TestimonialProps } from '@/types/testimonials';

const TestimonialsBlock = async () => {
	const testimonials: TestimonialProps[] = await getAllTestimonials();
	const testimonialsData = testimonials
		.sort(
			(a, b) =>
				// new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
				a.order - b.order,
		)
		.slice(0, 5);

	return (
		<section className="bg-gradient-to-b from-plitz-primary to-[#4B1322] py-16 lg:py-32">
			<div className="max-w-screen-xl plitz-container text-center drop-shadow-plitz-darker text-white text-balance">
				<div className="w-max mx-auto mb-8">
					<WhiteThickLine />
				</div>
				<div className="text-white font-bold mt-7 lg:mt-10 mb-4">
					Testimonials
				</div>
				<h3 className="mb-11 lg:mb-20">We are happy to help you!</h3>
				<TestimonialsCarousel latestTestimonials={testimonialsData} />
			</div>
		</section>
	);
};

export default TestimonialsBlock;
