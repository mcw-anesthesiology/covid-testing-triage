import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import Layout from 'components/Layout.js';

import { getConfig } from 'server-utils.js';

export default function Home({ config }) {
	return (
		<Layout id="index" config={config}>
			<div>
				<Markdown>{config.intro}</Markdown>
			</div>
			<Link href="/question">
				<a className="button">Begin</a>
			</Link>
		</Layout>
	);
}

export async function getStaticProps() {
	const config = await getConfig();

	return {
		props: {
			config,
		},
	};
}
