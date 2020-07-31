export function matchesConditions(conditions, query) {
	return conditions == null || Object.entries(conditions).every(
		([prop, val]) => query[prop] === val
	);
}
