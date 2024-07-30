import { render } from '@testing-library/react';
import QuoteBlock from './QuoteBlock';

describe('QuoteBlock', () => {
	it('should render correctly', () => {
		const { container } = render(<QuoteBlock />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
