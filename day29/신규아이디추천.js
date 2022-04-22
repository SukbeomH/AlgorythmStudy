// 신규 아이디 추천
// 문제 설명
// 카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어,
// 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다.
// "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때,
// 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
// 다음은 카카오 아이디의 규칙입니다.

// 아이디의 길이는 3자 이상 15자 이하여야 합니다.
// 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
// 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

function solution(new_id) {
	var answer = "";
	new_id = [...new_id];
	// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
	new_id = new_id.toLowerCase();

	// 2
	const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";
	new_id = [...new_id];
	answer = new_id.filter((str) => {
		return filter.includes(str);
	});

	// 3.
	answer = answer.filter((str, i) => {
		return (
			str !== "." || (str === "." && answer[i] !== ".")
		);
	});

	// 4.
	if (answer[0] === ".") {
		answer = answer.slice(1);
	}
	if (answer[answer.length - 1] === ".") {
		answer = answer.slice(0, answer.length - 1);
	}

	// 5.
	if (!answer) answer = "a";

	// 6.
	answer = answer.slice(0, 15);
	if (answer[answer.length - 1] === ".") {
		answer = answer.slice(0, answer.length - 1);
	}

	// 7.
	answer = answer
		.join("")
		.padEnd(3, answer[answer.length - 1]);

	return answer;
}

function solution(new_id) {
	var answer = "";
	const spreadId = [...new_id];
	// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
	new_id = new_id.toLowerCase();

	// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
	const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";
	for (let i = 0; i < new_id.length; i++) {
		if (filter.includes(new_id[i])) {
			answer += new_id[i];
		}
	}

	// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
	while (answer.includes("..")) {
		answer = answer.replace("..", ".");
	}
	// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
	if (answer[0] === ".") {
		answer = answer.substring(1);
	}
	if (answer[answer.length - 1] === ".") {
		answer = answer.substring(0, answer.length - 1);
	}

	// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
	if (answer.length === 0) {
		answer = "a";
	}

	// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
	if (answer.length >= 16) {
		answer = answer.substring(0, 15);
	}
	if (answer[answer.length - 1] === ".") {
		answer = answer.substring(0, answer.length - 1);
	}
	// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
	while (answer.length <= 2) {
		answer += answer[answer.length - 1];
	}

	return answer;
}

const solution = (new_id) => {
	const id = new_id
		.toLowerCase()
		.replace(/[^\w\d-_.]/g, "")
		.replace(/\.{2,}/g, ".")
		.replace(/^\.|\.$/g, "")
		.padEnd(1, "a")
		.slice(0, 15)
		.replace(/^\.|\.$/g, "");
	return id.padEnd(3, id[id.length - 1]);
};
