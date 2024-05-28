import { SquareState, type GameState } from './types';

export const areThereEmptySquares = (gameState: GameState): boolean => {
	return gameState.squareStates.find((i) => i === SquareState.Empty) !== undefined;
};
