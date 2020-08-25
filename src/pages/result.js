/* globals process */

import { useRouter } from 'next/router';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import fs from 'fs';
import path from 'path';

import Layout from 'components/Layout.js';
import Breadcrumbs from 'components/Breadcrumbs.js';

import { matchesConditions } from 'utils.js';

import config from '@/config.json';

export default function ResultPage({ results }) {
	const router = useRouter();
	const result = getResult(results, router);

	return (
		<Layout id="result">
			<>
				<Result result={result} />
				<Breadcrumbs />
				<Link href="question">
					<a className="button">Start again</a>
				</Link>
			</>
		</Layout>
	);
}

export async function getStaticProps() {
	const results = await Promise.all(
		config.results.map(async result => {
			if (result.src) {
				const filePath = path.join(process.cwd(), result.src);
				result.text = fs.readFileSync(filePath, 'utf8');
			}

			return result;
		})
	);

	return {
		props: {
			results
		}
	};
}

export function Result({ result }) {
	if (!result) {
		return <p>Sorry, this doesn&apos;t seem to be valid.</p>;
	}

	let resources = null;
	if (result.resources && result.resources.length > 0) {
		resources = (
			<ul className="resources">
				{result.resources.map(resource => (
					<li key={resource.href}>
						<a href={resource.href}>{resource.text}</a>
					</li>
				))}
			</ul>
		);
	}

	return (
		<>
			<div className="result">
				<Markdown>{result.text}</Markdown>
			</div>
			{resources}
		</>
	);
}

function getResult(results, router) {
	return results.find(result =>
		matchesConditions(result.conditions, router.query)
	);
}
