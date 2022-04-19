// [1차] 비밀지도
// 문제 설명
// 비밀지도
// 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다.
// 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다.
// 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

// 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
// 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다.각각 "지도 1"과 "지도 2"라고 하자.
// 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다.
// 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
// "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
// 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.

function solution(n, arr1, arr2) {
	let temp0 = [];
	let temp = [];
	let answer = [];
	for (let i = 0; i < n; i++) {
		temp0.push(...arr1[i].toString(2).padStart(n, "0"));
		temp.push(...arr2[i].toString(2).padStart(n, "0"));
	}
	temp0.map((e, i) => {
		if (temp0[i] === "1" || temp[i] === "1") {
			return (temp0[i] = "#");
		}
		return (temp0[i] = " ");
	});
	for (let i = 0; i < n; i++) {
		answer.push(temp0.slice(i * n, (i + 1) * n).join(""));
	}
	return answer;
}
n = 5;
arr1 = [9, 20, 28, 18, 11];
arr2 = [30, 1, 21, 17, 28];
출력 = ["#####", "# # #", "### #", "# ##", "#####"];

// 수업 - 메소드 - 리듀스 - 맵
function solution(n, arr1, arr2) {
	const answer = arr1.map((map1, i) => {
		map1 = map1.toString(2).padStart(n, "0"); //매개변수에 재할당하는 것은 좋은 방식은 아니다
		const map2 = arr2[i].toString(2).padStart(n, "0");

		const result = map1.split("").reduce((acc, cur) => {
			return acc + (cur === "1" || map2[i] === "1")
				? "#"
				: " ";
		}, "");
		return result;
	});
	return answer;
}

// 정규식맨 비트연산자
function solution(n, arr1, arr2) {
	return arr1.map((v, i) =>
		addZero(n, (v | arr2[i]).toString(2)).replace(
			/1|0/g,
			(a) => (+a ? "#" : " ")
		)
	);
}
const addZero = (n, s) => {
	return "0".repeat(n - s.length) + s;
};

// 더블 맵 쓰리 리턴
const solution = (n, arr1, arr2) => {
	const binaryStringArray1 = decimalToBinary(arr1, n);
	const binaryStringArray2 = decimalToBinary(arr2, n);
	const map1 = binaryStringArray1.map(splitToNumbers);
	const map2 = binaryStringArray2.map(splitToNumbers);
	const combinedMap = sumArray(map1, map2);

	return numberToSharpAndEmpty(combinedMap).map((v) =>
		v.join("")
	);
};
const numberToSharpAndEmpty = (arr) => {
	return arr.map((v1, i1) => {
		return v1.map((v2, i2) => {
			return v2 === 0 ? " " : "#";
		});
	});

	console.log(x);
};
const sumArray = (arr1, arr2) =>
	arr1.map((v1, i1) =>
		v1.map((v2, i2) => v2 + arr2[i1][i2])
	);
const decimalToBinary = (array, n) =>
	array.map((item) => item.toString(2).padStart(n, "0"));
const splitToNumbers = (str) =>
	str.split("").map((e) => Number(e));
