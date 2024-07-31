import React from 'react';
import { render } from '@testing-library/react';

import { getAllCtas } from '@/helpers/pullCtasData';
import CTARedBg from './CTARedBg';

// Mock the getAllCtas function
jest.mock('@/helpers/pullCtasData', () => ({
	getAllCtas: jest.fn().mockImplementation(() =>
		Promise.resolve([
			{
				order: 1,
				title: 'CTA Title',
				details: '<p>CTA Details</p>',
				buttons: [
					{ link: '/link1', label: 'Button 1', primary: true, position: 1 },
					{ link: '/link2', label: 'Button 2', primary: false, position: 2 },
				],
			},
		]),
	),
}));

describe('CTARedBg Component', () => {
	it('renders correctly with CTA data', async () => {
		// Arrange
		const mockCtas = [
			{
				order: 1,
				title: 'CTA Title',
				details: '<p>CTA Details</p>',
				buttons: [
					{ link: '/link1', label: 'Button 1', primary: true, position: 1 },
					{ link: '/link2', label: 'Button 2', primary: false, position: 2 },
				],
			},
		];
		(getAllCtas as jest.Mock).mockResolvedValue(mockCtas);

		// Act
		const ComponentResolved = await CTARedBg();

		const MockComponent = () => ComponentResolved;
		const { container } = render(<MockComponent />);

		expect(container).toMatchSnapshot();
	});
});
