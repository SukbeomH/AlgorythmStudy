// 피보나치 수
// 문제 설명
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// 제한 사항
// n은 2 이상 100,000 이하인 자연수입니다.

function solutionF(n) {
	function fibonacci(m) {
		if (m <= 2) {
			return 1;
		}
		return (
			((fibonacci(m - 1) % 1234567) +
				(fibonacci(m - 2) % 1234567)) %
			1234567
		);
	}
	return fibonacci(n);
}

function solution(n) {
	let num = 0;
	let fibo1 = 0;
	let fibo2 = 1;
	for (let i = 2; i <= n; i++) {
		num = ((fibo1 % 1234567) + (fibo2 % 1234567)) % 1234567;
		fibo1 = fibo2;
		fibo2 = num;
	}
	if (n === 2) {
		return 1;
	} else return num;
}

// n 번째 피보나치 수
// 피보나치 수는 0부터 시작됨
// 0부터 시작하는 피보나치수의 n번째 수를 구해야함
// 해당 수를 1234567로 나눈 나머지 리턴
// 자바스크립트가 정수계산을 보장하는 범위는 console.log(Number.MAXSAFEINTEGER)
// 그냥 피보나치 n번째 수에대해 바로 나머지를 구할경우
// 78번째 이후부터는 표현은 되지만 '안전한 정수 계산'을 보장하지 못한다
// 따라서 (A+B)%C = ((A%C)+(B%C))%C 라는 수의 속성.
