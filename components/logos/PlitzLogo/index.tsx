import * as React from 'react';
import { SVGProps } from 'react';

const PlitzLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 25" {...props}>
		<defs>
			<clipPath id="a">
				<path fill="#efefef" d="M0 0h108.363v25H0z" data-name="Rectangle 4" />
			</clipPath>
		</defs>
		<g fill="#efefef" clipPath="url(#a)">
			<path
				d="M11.548 17.791H4.619V25H0V.504c3.849 0 7.7-.035 11.548-.035 11.968 0 12 17.322 0 17.322m-6.929-4.236h6.929c5.914 0 5.879-8.679 0-8.679H4.619Z"
				data-name="Path 1"
			/>
			<path d="M26.297.504v20.227h12.6V25H21.678V.504Z" data-name="Path 2" />
			<path d="M40.206.504h4.584V25h-4.584z" data-name="Rectangle 2" />
			<path
				d="M53.816 4.703h-7.769v-4.2h20.157v4.2h-7.769v20.3h-4.619Z"
				data-name="Path 3"
			/>
			<path
				d="M67.037.504h18.827v2.17l-12.7 17.952h12.7V25H66.722v-2.66l12.423-17.5H67.037Z"
				data-name="Path 4"
			/>
			<path
				d="M89.536 0h18.827v2.17l-12.7 17.952-5.2-.024L101.644 4.34H89.536Z"
				data-name="Path 5"
			/>
			<path d="M86.456 6.854h2.766v10.787h-2.766z" data-name="Rectangle 3" />
		</g>
	</svg>
);
export default PlitzLogo;
