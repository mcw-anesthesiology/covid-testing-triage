import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import Layout from 'components/Layout.js';

import { intro } from '@/config.json';

export default function Home() {
	return (
		<Layout id="index">
			<div>
				<Markdown>{intro}</Markdown>
			</div>
			<Link href="/question">
				<a className="button">Begin</a>
			</Link>
		</Layout>
	);
}
