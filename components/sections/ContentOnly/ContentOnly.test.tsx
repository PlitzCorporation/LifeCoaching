import React from 'react';
import { render } from '@testing-library/react';
import ContentOnly from './ContentOnly';

describe('ContentOnly', () => {
	it('renders component', () => {
		const text = '<p>Hello, I am Batman, but my real name is Bruce Wayne</p>';
		const classes = 'text-center text-white';
		const { container } = render(<ContentOnly text={text} classes={classes} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
