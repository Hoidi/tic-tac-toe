export type Player = 'X' | 'O';

export type SquareState = Player | 'Empty';

export const initalGameState: GameState = {
	squareStates: ['Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
	currentPlayer: 'X'
};

export type GameState = {
	squareStates: SquareState[];
	currentPlayer: Player;
};
