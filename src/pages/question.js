import { useRouter } from 'next/router';

import Layout from 'components/Layout.js';
import Breadcrumbs from 'components/Breadcrumbs.js';
import Question from 'components/Question.js';

import { matchesConditions } from 'utils.js';

import config from '@/config.json';

export default function QuestionPage() {
	const router = useRouter();

	const question = getQuestion(router);

	if (!question) {
		router.replace({
			pathname: 'result',
			query: router.query
		});
	}

	return (
		<Layout>
			<>
				<Breadcrumbs />
				<Question {...question} />
			</>
		</Layout>
	);
}

function getQuestion(router) {
	return config.questions.find(
		question =>
			!(question.prop in router.query) &&
			matchesConditions(question.conditions, router.query)
	);
}
