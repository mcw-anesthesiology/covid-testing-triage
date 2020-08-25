export function matchesConditions(conditions, query) {
	return (
		conditions == null ||
		Object.entries(conditions).every(([prop, val]) =>
			Array.isArray(val) ? val.includes(query[prop]) : query[prop] === val
		)
	);
}
