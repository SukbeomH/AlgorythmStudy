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

//
//
function solution(priorities, location) {
	const origin = priorities[location];
	priorities[location] = 0;

	let answer = 0;
	while (true) {
		const search = priorities.indexOf(0);
		priorities[search] = origin;
		const max = Math.max(...priorities);
		priorities[search] = 0;

		if (priorities[0] === 0) {
			// 내가 뽑고 싶은 문서의 인쇄 차례라면
			if (max === origin) {
				return ++answer;
			}
		}

		if (priorities[0] === max) {
			// 현재 인쇄하려는 문서가 가장 중요도가 높은 문서가 맞는지
			priorities.shift();
			answer++;
		} else {
			// 다른 문서에서 더 중요도가 높은 문서가 있다면
			priorities.push(priorities[0]);
			priorities.shift();
		}
	}
}

//
//
//
function solution(priorities, location) {
	const origin = priorities[location];
	priorities[location] = 0;

	const recursion = (count) => {
		const current = priorities[0];

		const searchZero = priorities.indexOf(0);
		priorities[searchZero] = origin;
		const max = Math.max(...priorities);
		priorities[searchZero] = 0;

		if (current === 0 && origin === max) {
			return ++count;
		}

		current === max ? count++ : priorities.push(current);
		priorities.shift();

		return recursion(count);
	};
	return recursion(0);
}
