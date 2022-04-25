// 신고 결과 받기
// 문제 설명
// 문제 설명
// 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.

//
// Methods
//
function solution(id_list, report, k) {
	const users = {};
	const reporter = {};

	report = Array.from(new Set(report));
	report.forEach((el) => {
		const info = el.split(" ");

		if (users[info[1]] === undefined) {
			users[info[1]] = 0;
		}
		if (reporter[info[0]] === undefined) {
			reporter[info[0]] = [];
		}
		users[info[1]]++;
		reporter[info[0]].push(info[1]);
	});
	return id_list.map((name) => {
		const arr = reporter[name] || [];
		return arr.reduce((acc, cur) => {
			return acc + (users[cur] >= k ? 1 : 0);
		}, 0);
	});
}

// 객체 데이터 문법
const obj = new Map();
// 중복되는 키를 가지지 않는다
obj["name"] = "james";
// key, value set
obj.set("name", "james");
// 키로 밸류 찾기
obj.get("name");
// 키가 존재하는지, 밸류가 존재하는지 확인법
obj.has("age");
// 삭제방법
obj.delete("name");
// 전체 통으로 삭제
obj.clear();
//

//
//
//for
function solution(id_list, report, k) {
	var answer = [];
	// 신고당한사람이 몇번 신고를 당했는지 저장
	const users = {};
	// 신고한 사람이 누구를 신고했는지를 저장
	const reporter = [];

	for (let i = 0; i < report.length; i++) {
		const info = report[i].split(" ");
		// 신고당한 사람의 신고횟수 누적하기, 객체에 없다면 0으로 초기값 부여
		if (users[info[1]] === undefined) {
			users[info[1]] = 0;
		}
		// 신고횟수 누적
		users[info[i]]++;
		// 신고한 사람이 여러명을 저장했는지 저장
		if (reporter[info[0]] === undefined) {
			reporter[info[0]] = [];
		}
		// 누가 누구를 신고했는지 확인
		reporter[info[0]].push(info[1]);

		// 동일인물을 재신고하는 경우 무효화
		if (!reporter[info[0]].includes(info[1])) {
			users[info[1]]++;
			reporter[info[0]].push(info[1]);
		}
	}
	// 신고자에게 메일 발송 횟수
	for (let i = 0; i < id_list.length; i++) {
		// ?!?!!?
		const arr = reporter[id_list[i]] || 0;
		// 메일을 받지 못하는 사람은 0
		answer[i] = 0;
		// 신고자 리스트에 없다면 신고한 사람이 아니다
		for (let j = 0; j < arr.length; j++) {
			if (users[arr[j]] >= k) {
				answer[i]++;
			}
		}
	}
	return answer;
}

//
function solutionF(id_list, report, k) {
	var answer = [];
	// 리포트에서 중복되는 값을 제거한다
	const report2 = new Set(report);
	// 리포트에서 신고당한 사람의 신고횟수를 저장한다.
	let report3 = [];
	// 신고당한 사람만 있는 배열을 만든다
	report2.forEach((e) => {
		const e2 = e.split(" ")[1];
		report3.push(e2);
	});
	console.log(report3);
	// 신고당한 횟수만큼 숫자 ++
	let report4 = [];
	let num = 0;
	for (let i = 0; i < report3.length; i++) {
		let temp = report3[i];
		if (report3.includes(temp)) {
			num++;
		}
	}
	console.log(num);
	// 신고횟수가 기준치를 넘었는지 확인하고 넘었다면 저장

	// 저장된 신고유저를 신고한 유저를 찾아서 찾을때마다 메일횟수 ++

	return answer;
}
