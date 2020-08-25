import { useRouter } from 'next/router';
import Link from 'next/link';

import { matchesConditions } from 'utils.js';

export default function Options({ prop, options = [] }) {
	const router = useRouter();

	const filteredOptions = options.filter(option =>
		matchesConditions(option.conditions, router.query)
	);

	return (
		<ul className="options">
			{filteredOptions.map(option => {
				const query = {
					...router.query,
					[prop]: option.value
				};

				if (option.additionalProps) {
					for (const [p, v] of Object.entries(
						option.additionalProps
					)) {
						query[p] = v;
					}
				}

				return (
					<li className="option" key={option.value}>
						<Link href={{ query }}>
							<a className="button">{option.text}</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
