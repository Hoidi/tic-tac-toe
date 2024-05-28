import { type GameState, type Player, type SquareState } from './types';

export const areThereEmptySquares = (gameState: GameState): boolean => {
	return gameState.squareStates.find((i) => i === 'Empty') !== undefined;
};

export const hasAnyoneWon = (squareStates: SquareState[]): false | Player => {
	const rows = hasWonRows(squareStates);
	if (rows) {
		return rows;
	}

	const cols = hasWonCols(squareStates);
	if (cols) {
		return cols;
	}

	return hasWonDiagonals(squareStates);
};

const hasWonRows = (squareStates: SquareState[]): false | Player => {
	for (const col of [0, 1, 2]) {
		const one = squareStates[col + 0];
		const two = squareStates[col + 1 * 3];
		const thr = squareStates[col + 2 * 3];

		if (one === two && two === thr && thr !== 'Empty') {
			return thr;
		}
	}

	return false;
};

const hasWonCols = (squareStates: SquareState[]): false | Player => {
	for (const row of [0, 1, 2]) {
		const one = squareStates[row * 3 + 0];
		const two = squareStates[row * 3 + 1];
		const thr = squareStates[row * 3 + 2];

		if (one === two && two === thr && thr !== 'Empty') {
			return thr;
		}
	}

	return false;
};

const hasWonDiagonals = (squareStates: SquareState[]): false | Player => {
	const d1 = squareStates[0];
	const d2 = squareStates[4];
	const d3 = squareStates[8];

	if (d1 === d2 && d2 === d3 && d3 !== 'Empty') {
		return d3;
	}

	const d4 = squareStates[2];
	const d5 = squareStates[4];
	const d6 = squareStates[6];

	if (d4 === d5 && d5 === d6 && d6 !== 'Empty') {
		return d6;
	}

	return false;
};
