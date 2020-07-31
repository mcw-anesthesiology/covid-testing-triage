import Options from 'components/Options.js';

export default function Question({ text, prop, options }) {
	return (
		<section className="question">
			<p>{text}</p>

			<Options {...{ prop, options }} />
		</section>
	);
}
