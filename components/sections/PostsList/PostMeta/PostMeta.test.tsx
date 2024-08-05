import { render } from '@testing-library/react';
import PostMeta from './PostMeta';

describe('PostMeta', () => {
	it('should render the component', () => {
		const { container } = render(
			<PostMeta
				fullname="Bruce Wayne"
				createdAt="1982-07-07T17:38:34.576+00:00"
			/>,
		);
		expect(container).toMatchSnapshot();
	});
});
