import { useRouter } from 'next/router';
import Link from 'next/link';

import Layout from 'components/Layout.js';
import Breadcrumbs from 'components/Breadcrumbs.js';

import { matchesConditions } from 'utils.js';

import config from '@/config.json';

export default function ResultPage() {
	const router = useRouter();
	const result = getResult(router);

	return (
		<Layout id="result">
			<>
				<Breadcrumbs />
				{result ? (
					<>
						<p>{result.text}</p>
						{result.resources.length > 0 && (
							<ul>
								{result.resources.map(resource => (
									<li key={resource.href}>
										<a href={resource.href}>
											{resource.text}
										</a>
									</li>
								))}
							</ul>
						)}
					</>
				) : (
					<p>Sorry, this doesn&apos;t seem to be valid.</p>
				)}
				<Link href="question">
					<a className="button">Start again</a>
				</Link>
			</>
		</Layout>
	);
}

function getResult(router) {
	return config.results.find(result =>
		matchesConditions(result.conditions, router.query)
	);
}
