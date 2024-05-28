export enum CurrentPlayer {
	X,
	O
}

export enum SquareState {
	X,
	O,
	Empty
}

export const initalGameState: GameState = {
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
	],
	currentPlayer: CurrentPlayer.X
};

export type GameState = {
	squareStates: SquareState[];
	currentPlayer: CurrentPlayer;
};
