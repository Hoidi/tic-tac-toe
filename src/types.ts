export enum SquareState {
	Empty,
	X,
	O
}

export const initalGameState = {
	squareStates: [
		SquareState.Empty,
		SquareState.Empty,
		SquareState.Empty,

		SquareState.Empty,
		SquareState.Empty,
		SquareState.Empty,

		SquareState.Empty,
		SquareState.Empty,
		SquareState.Empty
	]
};

export type GameState = {
	squareStates: SquareState[];
};
