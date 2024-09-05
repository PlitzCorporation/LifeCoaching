import { render } from '@testing-library/react';
import LatestPosts from './LatestPosts';

jest.mock('next/image', () => ({
	__esModule: true,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: (props: any) => {
		// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
		return <img {...props} priority="false" />;
	},
}));

jest.mock('@/helpers/apiCalls/pullBlogPost', () => ({
	getPostsByCategory: jest.fn().mockResolvedValue({
		items: [
			{
				_id: '1',
				link: 'post-1',
				title: 'Post 1',
				createdAt: '2021-09-01T00:00:00.000Z',
				featuredimg: 'image1.jpg',
				postintro: '<p>Post 1 intro</p>',
			},
			{
				_id: '2',
				link: 'post-2',
				title: 'Post 2',
				createdAt: '2021-09-02T00:00:00.000Z',
				featuredimg: 'image2.jpg',
				postintro: '<p>Post 2 intro</p>',
			},
			{
				_id: '3',
				link: 'post-3',
				title: 'Post 3',
				createdAt: '2021-09-03T00:00:00.000Z',
				featuredimg: 'image3.jpg',
				postintro: '<p>Post 3 intro</p>',
			},
		],
	}),
}));

describe('LatestPosts', () => {
	it('renders correctly with post data', async () => {
		const ComponentResolved = await LatestPosts();

		const MockComponent = () => ComponentResolved;
		const { container } = render(<MockComponent />);

		// Assert
		expect(container).toMatchSnapshot();
	});
});
