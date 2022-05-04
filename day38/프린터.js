function solution(priorities, location) {
	const origin = priorities[location];
	priorities[location] = "a";

	const recursion = (i) => {
		const search = priorities.indexOf("a");
		priorities[location] = origin;

		const max = Math.max(...priorities);
		priorities[search] = "a";

		if (priorities[0] === "a" && origin === max) {
			return ++i;
		}

		priorities[0] === max
			? i++
			: priorities.push(priorities[0]);
		priorities.shift();

		return recursion(i);
	};
	return recursion(0);
}
