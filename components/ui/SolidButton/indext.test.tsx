import { render } from '@testing-library/react';
import SolidButton from '.';

describe('SolidButton', () => {
	it('matches snapshot', () => {
		const { container } = render(<SolidButton label="Click Me" />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
