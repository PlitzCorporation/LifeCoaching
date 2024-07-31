import { render, screen } from '@testing-library/react';
import SolidButton from '.';

describe('SolidButton', () => {
	it('matches snapshot', () => {
		const { container } = render(<SolidButton label="Click Me" />);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders A tag if href prop is present', () => {
		render(<SolidButton href="/" label="Click Me" />);

		const link = screen.getByTestId('aTag');
		expect(link).toBeInTheDocument();
	});

	it('renders BUTTON tag if there is no href prop', () => {
		render(<SolidButton label="Click Me" />);

		const button = screen.getByTestId('buttonTag');
		expect(button).toBeInTheDocument();
	});
});
