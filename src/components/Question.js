import { useState } from 'react';
import Markdown from 'markdown-to-jsx';
import { Dialog } from '@reach/dialog';

import Options from 'components/Options.js';

export default function Question({ preText, text, helpText, prop, options }) {
	const [showInfo, setShowInfo] = useState(false);
	const toggleInfo = () => {
		setShowInfo(!showInfo);
	};
	const closeInfo = () => {
		setShowInfo(false);
	};

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
			{helpText && (
				<div className="question-help-container">
					<button
						className="button info-button"
						title="Toggle help text"
						onClick={toggleInfo}
					>
						More information
					</button>
					<Dialog
						aria-label="Question help text"
						isOpen={showInfo}
						onDismiss={closeInfo}
					>
						<button
							className="close-button"
							onClick={closeInfo}
							title="Close"
						>
							✕
						</button>
						<div className="question-help-text">
							<Markdown>{helpText}</Markdown>

							<button className="button" onClick={closeInfo}>
								Close
							</button>
						</div>
					</Dialog>
				</div>
			)}

			<Options {...{ prop, options }} />
		</section>
	);
}
