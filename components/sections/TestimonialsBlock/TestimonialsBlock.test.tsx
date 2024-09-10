import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialsBlock from './TestimonialsBlock';

jest.mock('react-slick', () => ({
	__esModule: true,
	default: ({ children }: { children: React.ReactNode }) => (
		<div className="slick-slider slick-initialized">
			<div className="slick-arrow slick-prev" style={{ display: 'block' }}>
				&#x2190;
			</div>
			<div className="slick-list">{children}</div>
			<div className="slick-arrow slick-prev" style={{ display: 'block' }}>
				&#x2192;
			</div>
			<div className="slick-dots">
				<ul className="flex gap-2 lg:gap-4 justify-center w-full flex-wrap items-center h-max">
					<li className="">
						<div className="h-3 w-3 bg-plitz-secondary rounded-full"></div>
					</li>
					<li className="slick-active">
						<div className="h-3 w-3 bg-plitz-secondary rounded-full"></div>
					</li>
					<li className="">
						<div className="h-3 w-3 bg-plitz-secondary rounded-full"></div>
					</li>
				</ul>
			</div>
		</div>
	),
}));

// Mock the getAllTestimonials function
jest.mock('@/helpers/apiCalls/pullTestimonialsData', () => ({
	getAllTestimonials: jest.fn().mockResolvedValue([
		{
			_id: '1',
			isLive: true,
			order: 1,
			author: 'Test User 1',
			details: 'Great service!',
			createdAt: '2023-09-01T00:00:00Z',
		},
		{
			_id: '2',
			isLive: true,
			order: 2,
			author: 'Test User 2',
			details: 'Amazing experience!',
			createdAt: '2023-09-03T00:00:00Z',
		},
		{
			_id: '3',
			isLive: true,
			order: 3,
			author: 'Test User 3',
			details: 'Highly recommend!',
			createdAt: '2023-08-30T00:00:00Z',
		},
	]),
}));

describe('TestimonialsBlock', () => {
	it('should render the TestimonialsBlock with sorted and sliced testimonials', async () => {
		const ComponentResolved = await TestimonialsBlock();

		const MockComponent = () => ComponentResolved;
		const { container } = render(<MockComponent />);

		// Check if the testimonials carousel has been rendered
		const heading = screen.getByText('Great service!');
		expect(heading).toBeInTheDocument();

		// Check if the latest testimonial's details appears in the carousel
		const testimonialMessage = screen.getByText('Amazing experience!');
		expect(testimonialMessage).toBeInTheDocument();

		// Assert
		expect(container).toMatchSnapshot();
	});
});
