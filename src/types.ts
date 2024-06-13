export type Player = 'X' | 'O';

export type SquareState = Player | 'Empty';

const initalGameState: GameState = {
	squareStates: ['Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty', 'Empty'],
	currentPlayer: 'X',
	isGameOver: false
};
Object.freeze(initalGameState);

export const getInitalGameState = (): GameState => {
	return JSON.parse(JSON.stringify(initalGameState));
};

export type GameState = {
	squareStates: SquareState[];
	currentPlayer: Player;
	isGameOver: boolean;
};
