export const message = console.log('app worked');

import Game, * as gameData from './game';

const game = new Game();
game.start();