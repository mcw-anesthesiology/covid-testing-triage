import Markdown from 'markdown-to-jsx';

import Options from 'components/Options.js';

export default function Question({ preText, text, prop, options }) {
	return (
		<section className="question">
			{preText && (
				<div className="question-pre-text">
					<Markdown>{preText}</Markdown>
				</div>
			)}
			<div className="question-text">
				<Markdown>{text}</Markdown>
			</div>

			<Options {...{ prop, options }} />
		</section>
	);
}
