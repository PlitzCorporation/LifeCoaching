import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './index';

describe('HomePage', () => {
	it('renders the welcome message', () => {
		const { container } = render(<HomePage />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
