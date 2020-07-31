import Link from 'next/link';
import { useRouter } from 'next/router';

import config from '@/config.json';

export default function Breadcrumbs() {
	const router = useRouter();

	const answeredQuestions = config.questions
		.filter(question => question.prop in router.query)
		.map(q => ({
			...q,
			answerText: q.options.find(o => o.value === router.query[q.prop])
				?.text
		}));

	return (
		<ol className="breadcrumbs">
			{answeredQuestions.map(q => {
				const query = {
					...router.query
				};
				delete query[q.prop];

				return (
					<li key={q.prop} className="breadcrumb">
						<Link
							href={{
								pathname: 'question',
								query
							}}
						>
							<a>
								<span className="breadcrumb-question">
									{q.text}
								</span>
								<span className="breadcrumb-answer">
									{q.answerText}
								</span>
							</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
}
