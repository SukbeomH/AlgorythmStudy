// 정수 제곱근 판별

// 문제 설명
// 임의의 양의 정수 n에 대해,
// n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x + 1의 제곱을 리턴하고,
// n이 양의 정수 x의 제곱이 아니라면 - 1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

function solution(n) {
	if (Number.isInteger(Math.sqrt(n))) {
		return (Math.sqrt(n) + 1) ** 2;
	}
	return -1;
}

solution(121); // 144
solution(3); // -1

// var root = Math.sqrt(n);
// var result = parseInt(root) - root === 0 ? (root + 1 ) * (root + 1) : "no";
// result;

function solution2(n) {
	let answer = 1; // 최초식
	// 조건식
	while (answer ** 2 < n) {
		//증감식
		answer++;
	}
	return answer ** 2 === n ? (answer + 1) ** 2 : -1;
}
