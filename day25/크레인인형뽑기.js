// 크레인 인형뽑기 게임

function solution(board, moves) {
	var answer = 0;
	return answer;
}

board = [
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 3],
	[0, 2, 5, 0, 1],
	[4, 2, 4, 4, 2],
	[3, 5, 1, 3, 1],
];
moves = [1, 5, 3, 5, 1, 2, 1, 4];

// 무브값의 위치로 간다
// 0이 아닌 값까지 내려간다
// 새로운 배열을 만들어 값을 넣는다
// 원래 값 자리에 0을 넣는다
// 무브의 길이만큼 반복한다
// 새로운 배열에 2개가 연속으로 같은 값이 있는지 확인한다
// 같은 값이 연속으로 있으면 제거한다
// 같은 값이 연속으로 없을 때 까지 반복한다
// 제거의 횟수를 센다
width = board[0].length;
depth = board.length;
pick = moves.length;
store = [];

// 무브값의 위치로 간다, 무브의 길이만큼 반복
for (let i = 0; i < moves.length; i++) {}
// 0이 아닌 값까지 내려간다, 최대 board.length 까지 반복
for (let j = 0; j < depth; j++) {}
if (board[moves[0] - 1][1] !== 0) {
	// 새로운 배열에 값을 넣는다
	store.push(board[moves[j] - 1][i]);
	// 원래 값 자리에 0을 넣는다
	board[moves[j] - 1].map((e, idx) => {
		if (idx === moves[j] - 1) e = 0;
	});
}

aaa = board[4][0];
store;
aaa;
board;
