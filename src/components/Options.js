import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Options({ prop, options = [] }) {
	const router = useRouter();

	return (
		<ul className="options">
			{options.map(option => (
				<li className="option" key={option.value}>
					<Link
						href={{
							query: {
								...router.query,
								[prop]: option.value
							}
						}}
					>
						<a className="button">{option.text}</a>
					</Link>
				</li>
			))}
		</ul>
	);
}
