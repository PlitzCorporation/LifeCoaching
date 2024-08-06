import { render } from '@testing-library/react';
import CustomSectionOne from './CustomSectionOne';

jest.mock('next/image', () => ({
	__esModule: true,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: (props: any) => {
		// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
		return <img {...props} priority="false" />;
	},
}));

describe('CustomSectionOne', () => {
	const mockData = {
		_id: '1',
		etitle: 'Welcome to Reason4Hope',
		esubtitle: 'Hi, I am Brenda Silva',
		econtent: 'This is Brenda Silva´s Bio',
		eimg: 'uploads/Reason4Hope/image.jpg',
		eposition: 3,
	};

	const OLD_ENV = process.env;

	beforeAll(() => {
		jest.resetModules();
		process.env.NEXT_PUBLIC_CMS = 'https://thedavid.plitz7.com';
	});

	afterAll(() => {
		process.env = OLD_ENV;
	});

	it('should render', () => {
		const { container } = render(<CustomSectionOne {...mockData} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
