import { render } from '@testing-library/react';
import HomeHero, { HomeHeroProps } from './HomeHero';

jest.mock('next/image', () => ({
	__esModule: true,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: (props: any) => {
		// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
		return <img {...props} priority="true" />;
	},
}));

describe('HomeHero', () => {
	const OLD_ENV = process.env;

	beforeAll(() => {
		jest.resetModules();
		process.env.NEXT_PUBLIC_CMS = 'https://thedavid.plitz7.com';
	});

	afterAll(() => {
		process.env = OLD_ENV;
	});

	const props: HomeHeroProps = {
		title: 'Hero Title',
		subtitle: 'Hero Subtitle',
		content: 'Hero Content',
		image: 'uploads/Reason4Hope/image.jpg',
	};

	it('renders the correct hero content', () => {
		const { container } = render(<HomeHero {...props} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
