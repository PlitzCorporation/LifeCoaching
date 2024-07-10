import { render } from '@testing-library/react';
import OutlinedButton from '.';

describe('OutlinedButton', () => {
	it('matches snapshot', () => {
		const { container } = render(<OutlinedButton label="Click Me" />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
