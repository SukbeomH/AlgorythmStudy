// 압축
// 신입사원 어피치는 카카오톡으로 전송되는 메시지를 압축하여 전송 효율을 높이는 업무를 맡게 되었다.
// 메시지를 압축하더라도 전달되는 정보가 바뀌어서는 안 되므로, 압축 전의 정보를 완벽하게 복원 가능한 무손실 압축 알고리즘을 구현하기로 했다.

// 어피치는 여러 압축 알고리즘 중에서 성능이 좋고 구현이 간단한 LZW(Lempel–Ziv–Welch) 압축을 구현하기로 했다.
// LZW 압축은 1983년 발표된 알고리즘으로, 이미지 파일 포맷인 GIF 등 다양한 응용에서 사용되었다.

// LZW 압축은 다음 과정을 거친다.

// 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
// 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
// w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
// 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
// 단계 2로 돌아간다.
// 압축 알고리즘이 영문 대문자만 처리한다고 할 때, 사전은 다음과 같이 초기화된다.
// 사전의 색인 번호는 정수값으로 주어지며, 1부터 시작한다고 하자.

function solution(msg) {
	var answer = [];

	// 1. 사전을 초기화한다
	// 번호와 알파벳, 키:값 쌍을 가지는 배열
	const dic = {};
	let number = 1;
	// 아스키코드로 알파벳 대문자 저장
	for (let i = 65; i <= 90; i++) {
		dic[String.fromCharCode(i)] = number;
		number++;
	}

	// 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
	// 여러글자를 처리하기 위한 변수생성
	let str = "";
	// 주어진 문자를 분할하여 사전에서 검색
	for (let i = 0; i < msg.length; i++) {
		str += msg[i];
		// 다음글자도 추가된 상태를 확인
		const next =
			msg[i + 1] === undefined ? str : str + msg[i + 1];
		// 마지막 글자 확인
		if (i === msg.length - 1) {
			answer.push(dic[str]);
		}
		// 사전에 문자열이 존재하는지 검색
		if (dic[next] === undefined) {
			// 없다면 사전에 추가
			dic[next] = number;
			number++;
			// 결과에 색인번호를 추가
			answer.push(dic[str]);
			// 주어진 문자열에서 제거
			str = "";
		}
	}
	return answer;
}

function solutionMethod(msg) {
	var answer = [];

	// 1. 사전을 초기화한다
	// 번호와 알파벳, 키:값 쌍을 가지는 배열
	const dic = {};
	let number = 1;
	// 아스키코드로 알파벳 대문자 저장
	for (let i = 65; i <= 90; i++) {
		dic[String.fromCharCode(i)] = number;
		number++;
	}
	// 구조분해할당
	let arr = [...msg];

	// 변수할당, 초기화
	let str = "";
	arr.reduce((acc, cur, idx) => {
		str += cur;
		const next = str + msg[idx + 1];

		if (dic[next] === undefined) {
			dic[next] = number;
			number++;

			acc.push(dic[str]);
			str = "";
		}
		return acc;
	}, []);
}

//
//
//
function solution(msg) {
	const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
		.split("")
		.reduce((dict, c, i) => {
			dict[c] = i + 1;
			return dict;
		}, {});
	dict.nextId = 27;
	const ans = [];
	for (let i = 0, j = 0; i < msg.length; i = j) {
		j = msg.length;
		let longest = "";
		while (
			dict[(longest = msg.substring(i, j))] === undefined
		)
			--j;
		ans.push(dict[longest]);
		dict[longest + msg[j]] = dict.nextId++;
	}

	return ans;
}

//
//
//
function solution(msg) {
	var M = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	var answer = [];
	while (msg.length > 0) {
		var temp = "";
		for (var i = 0; i < msg.length; i++) {
			temp = msg.slice(0, i + 1);
			if (M.indexOf(temp) === -1) {
				answer.push(
					M.indexOf(temp.slice(0, temp.length - 1)) + 1
				);
				break;
			}
			if (i === msg.length - 1) {
				answer.push(
					M.indexOf(temp.slice(0, temp.length)) + 1
				);
			}
		}
		M.push(temp);
		msg = msg.slice(i);
	}
	return answer;
}
