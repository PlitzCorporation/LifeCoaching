import { render, screen } from '@testing-library/react';
import OutlinedButton from '.';

describe('OutlinedButton', () => {
	it('matches snapshot', () => {
		const { container } = render(<OutlinedButton label="Click Me" />);
		expect(container.firstChild).toMatchSnapshot();
	});

	it('renders A tag if href prop is present', () => {
		render(<OutlinedButton href="/" label="Click Me" />);

		const link = screen.getByTestId('aTag');
		expect(link).toBeInTheDocument();
	});

	it('renders BUTTON tag if there is no href prop', () => {
		render(<OutlinedButton label="Click Me" />);

		const button = screen.getByTestId('buttonTag');
		expect(button).toBeInTheDocument();
	});
});
