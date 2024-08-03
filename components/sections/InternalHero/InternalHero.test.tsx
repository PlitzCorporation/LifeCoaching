import { render } from '@testing-library/react';
import InternalHero, { InternalHeroProps } from './InternalHero';

jest.mock('next/image', () => ({
	__esModule: true,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: (props: any) => {
		// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
		return <img {...props} priority="true" />;
	},
}));

describe('InternalHero', () => {
	const OLD_ENV = process.env;

	beforeAll(() => {
		jest.resetModules();
		process.env.NEXT_PUBLIC_CMS = 'https://thedavid.plitz7.com';
	});

	afterAll(() => {
		process.env = OLD_ENV;
	});

	const props: InternalHeroProps = {
		title: 'Hero Title',
		subtitle: 'Hero Subtitle',
		bgImage: 'uploads/Reason4Hope/image.jpg',
	};

	it('renders the correct hero content', () => {
		const { container } = render(<InternalHero {...props} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
