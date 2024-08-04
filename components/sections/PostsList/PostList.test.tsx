import PostsList from './PostsList';
import { render } from '@testing-library/react';

jest.mock('next/image', () => ({
	__esModule: true,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: (props: any) => {
		// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
		return <img {...props} priority="false" />;
	},
}));

jest.mock('@/helpers/pullBlogPost', () => ({
	getAllBlogPosts: jest.fn().mockReturnValue([
		{
			_id: '1',
			title: 'Post 1',
			createdAt: '2021-09-01T00:00:00.000Z',
			fullname: 'Author 1',
			othersizes: {
				tablet: 'image1.jpg',
			},
			postintro: '<p>Post 1 intro</p>',
			link: 'post-1',
			isLive: true,
		},
		{
			_id: '2',
			title: 'Post 2',
			createdAt: '2021-09-02T00:00:00.000Z',
			fullname: 'Author 2',
			othersizes: {
				tablet: 'image2.jpg',
			},
			postintro: '<p>Post 2 intro</p>',
			link: 'post-2',
			isLive: true,
		},
		{
			_id: '3',
			title: 'Post 3',
			createdAt: '2021-09-03T00:00:00.000Z',
			fullname: 'Author 3',
			othersizes: {
				tablet: 'image3.jpg',
			},
			postintro: '<p>Post 3 intro</p>',
			link: 'post-3',
			isLive: true,
		},
	]),
}));

describe('PostsList', () => {
	it('renders correctly with post data', async () => {
		const ComponentResolved = await PostsList();

		const MockComponent = () => ComponentResolved;
		const { container } = render(<MockComponent />);

		// Assert
		expect(container).toMatchSnapshot();
	});
});
