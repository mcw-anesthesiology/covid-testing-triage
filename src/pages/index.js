import Link from 'next/link';

import Layout from 'components/Layout.js';

import { intro } from '@/config.json';

export default function Home() {
	return (
		<Layout id="index">
			<p>{intro}</p>
			<Link href="/question">
				<a className="button">Begin</a>
			</Link>
		</Layout>
	);
}
