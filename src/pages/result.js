import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';

import Layout from 'components/Layout.js';
import Breadcrumbs from 'components/Breadcrumbs.js';

import { matchesConditions } from 'utils.js';
import { getConfig } from 'server-utils.js';

export default function ResultPage({ config }) {
	const router = useRouter();
	const result = getResult(config.results, router);

	return (
		<Layout id="result" config={config}>
			<>
				<Result result={result} />
				<Breadcrumbs config={config} />
			</>
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

export function Result({ result }) {
	if (!result) {
		return <p>Sorry, this doesn&apos;t seem to be valid.</p>;
	}

	let resources = null;
	if (result.resources && result.resources.length > 0) {
		resources = (
			<div>
				<h3>Additional resources</h3>
				<ul className="resources">
					{result.resources.map(resource => (
						<li key={resource.href}>
							<a href={resource.href}>{resource.text}</a>
						</li>
					))}
				</ul>
			</div>
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
