'use client';

import React from 'react';
import Slider from 'react-slick';

import RightArrow from '@/components/icons/RightArrow';

import { TestimonialProps } from '@/types/testimonials';

interface TestimonialsCarouselProps {
	randomrizedTestimonials: TestimonialProps[];
}

const TestimonialsCarousel = (props: TestimonialsCarouselProps) => {
	const { randomrizedTestimonials } = props;
	const settings = {
		dots: true,
		autoplay: true,
		autoplaySpeed: 20000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		appendDots: (
			dots:
				| string
				| number
				| bigint
				| boolean
				| Iterable<React.ReactNode>
				| React.ReactPortal
				| Promise<React.AwaitedReactNode>
				| null
				| undefined,
		) => (
			<div>
				<ul className="flex gap-2 lg:gap-4 justify-center w-full flex-wrap items-center h-max">
					{dots}
				</ul>
			</div>
		),
		customPaging: () => (
			<div className="h-3 w-3 bg-plitz-green rounded-full"></div>
		),
	};

	return (
		<div className="mb-20 plitz-container">
			<Slider {...settings}>
				{randomrizedTestimonials.map((testimonial: TestimonialProps) => (
					<div key={testimonial._id} className="flex flex-col px-10">
						<blockquote
							className="text-xs lg:text-sm leading-6 lg:leading-7 mb-7 lg:mb-10"
							dangerouslySetInnerHTML={{
								__html: testimonial.details.replace(/<\/*[^>]+(>|$)/g, ''),
							}}
						></blockquote>
						<small className="">
							{testimonial.author} | Source: {testimonial.source}
						</small>
					</div>
				))}
			</Slider>
		</div>
	);
};

const SampleNextArrow = (props: {
	className?: string;
	onClick?: () => void;
	style?: React.StyleHTMLAttributes<HTMLDivElement>;
}) => {
	const { className, style } = props;
	return (
		<div
			className={`${className}`}
			style={{ ...style, display: 'block' }}
			onClick={props.onClick}
		>
			<RightArrow className="w-6 h-6 fill-plitz-green" />
		</div>
	);
};

const SamplePrevArrow = (props: {
	className?: string;
	onClick?: () => void;
	style?: React.StyleHTMLAttributes<HTMLDivElement>;
}) => {
	const { className, style } = props;
	return (
		<div
			className={`${className}`}
			style={{ ...style, display: 'block' }}
			onClick={props.onClick}
		>
			<RightArrow className="w-6 h-6 fill-plitz-green rotate-180" />
		</div>
	);
};

export default TestimonialsCarousel;
