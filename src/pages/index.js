import Link from 'next/link';

import Layout from 'components/Layout.js';

export default function Home() {
	return (
		<Layout id="index">
			<p>Some descriptive text about this app</p>
			<Link href="/question">
				<a className="button">Begin</a>
			</Link>
		</Layout>
	);
}
