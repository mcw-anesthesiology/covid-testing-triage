import { useRouter } from 'next/router';

import Layout from 'components/Layout.js';
import Breadcrumbs from 'components/Breadcrumbs.js';
import Question from 'components/Question.js';

import { matchesConditions } from 'utils.js';
import { getConfig } from 'server-utils.js';

export default function QuestionPage({ config }) {
	const router = useRouter();

	const question = getQuestion(config.questions, router);

	if (!question) {
		router.replace({
			pathname: 'result',
			query: router.query,
		});
	}

	return (
		<Layout id="question" config={config}>
			<>
				{question && <Question {...question} config={config} />}
				<Breadcrumbs config={config} />
			</>
		</Layout>
	);
}

function getQuestion(questions, router) {
	return questions.find(
		question =>
			!(question.prop in router.query) &&
			matchesConditions(question.conditions, router.query)
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
