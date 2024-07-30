import { render } from '@testing-library/react';
import FeatureBoxes, {
	FeatureBoxesProps,
} from '@/components/sections/FeatureBoxes/FeatureBoxes';

jest.mock('next/image', () => ({
	__esModule: true,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: (props: any) => {
		// eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
		return <img {...props} priority="false" />;
	},
}));

describe('FeatureBoxes', () => {
	const OLD_ENV = process.env;

	beforeAll(() => {
		jest.resetModules();
		process.env.NEXT_PUBLIC_CMS = 'https://thedavid.plitz7.com';
	});

	afterAll(() => {
		process.env = OLD_ENV;
	});

	const boxesData: FeatureBoxesProps['boxesData'] = [
		{
			_id: '1',
			etitle: 'Box 1',
			esubtitle: 'featuredBox',
			econtent: 'Description 1',
			eposition: 1,
			eimg: 'uploads/Reason4Hope/image.jpg',
		},
		{
			_id: '2',
			etitle: 'Box 2',
			esubtitle: 'featuredBox',
			econtent: 'Description 2',
			eposition: 2,
			eimg: 'uploads/Reason4Hope/image.jpg',
		},
	];

	it('renders the correct number of boxes', () => {
		const { container } = render(<FeatureBoxes boxesData={boxesData} />);
		expect(container.firstChild).toMatchSnapshot();
	});
});
