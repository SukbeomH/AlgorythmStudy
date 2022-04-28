// 올바른 괄호
// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다.

// 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때,
// 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

function solution(s) {
	const limit = s.length / 2;
	for (let i = 0; i < limit; i++) {
		s = s.replace("()", "");
	}
	return s === "";
}

//
function solution(s) {
	// 첫 문자열이 닫혀있거나, 마지막이 열려있다면 false 를 리턴한다. (예외처리)
	if (s[0] === ")" || s[s.length - 1] === "(") return false;

	let depth = 1;
	for (let i = 1; i < s.length; i++) {
		if (s[i] === "(") {
			// 열려있다면 1을 더한다.
			depth++;
		} else if (s[i] === ")") {
			// 닫혀있다면 1을 뺀다.
			depth--;

			// 0 미만으로 (닫혀있는 게 더 많다면 먼저 false를 리턴한다.)
			if (depth < 0) {
				return false;
			}
		}
	}
	return depth === 0;
}
//
//
//
function solutionF(s) {
	const arr = [...s];
	// 괄호의 양 개수를 맞춘다
	numL = 0;
	numR = 0;
	for (let i = 0; i < arr.length; i++) {
		arr[i] === "(" ? numL++ : numR++;
	}
	if (numL !== numR) return false;
	// 시작은 왼쪽 괄호여야한다
	if (arr[0] !== "(") return false;
	// 마지막 괄호는 닫힌 괄호
	if (arr[arr.length - 1] !== ")") return false;
	// 첫 닫힌 괄호 앞은 무조건 열린 괄호
	if (arr[arr.indexOf(")") - 1] !== "(") return false;
	// 마지막 열린괄호 뒤는 무조건 닫힌괄호
	if (arr[arr.lastIndexOf("(") + 1] !== ")") return false;
	// 열린 괄호 뒤에는 닫힌괄호가 2개 올 수 없다
	let j = 0;
	while (arr[j] === "(") {
		if (arr[j + 1] === ")" && arr[j + 2] === ")") {
			return false;
		}
		j++;
	}
	// 열린 괄호 뒤에는 닫힌괄호가 2개 올 수 없다
	let k = 2;
	while (arr[k] === ")") {
		if (arr[k - 1] === "(" && arr[k - 2] === "(") {
			return false;
		}
		j++;
	}

	return true;
}
// for문은 느리다
// // 괄호의 양 개수를 맞춘다
// numL = 0;
// numR = 0;
// arr.forEach((ele) => {
// 	if (ele === "(") numL++;
// 	if (ele === ")") numR++;
// });
// if (numL !== numR) return false;
