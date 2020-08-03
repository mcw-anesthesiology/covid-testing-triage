import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import config from '@/config.json';

export default function Breadcrumbs() {
	const [showInfo, setShowInfo] = useState(false);

	const router = useRouter();

	const answeredQuestions = config.questions
		.filter(question => question.prop in router.query)
		.map(q => ({
			...q,
			answerText: q.options.find(o => o.value === router.query[q.prop])
				?.text
		}));

	return (
		<div className="breadcrumbs">
			{answeredQuestions.length > 0 && (
				<>
					<ol>
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
					{showInfo && (
						<p>Press an entry above to change your selection</p>
					)}
					<button
						className="button info-button"
						title="Toggle help text"
						onClick={() => {
							setShowInfo(!showInfo);
						}}
					>
						?
					</button>
				</>
			)}
		</div>
	);
}
