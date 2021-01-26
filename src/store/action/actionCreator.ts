const MOVE_SNAKE = 'MOVE_SNAKE';
const CREATE_MATRIX = 'CREATE_MATRIX';
const CREATE_SNAKE = 'CREATE_SNAKE';

export let moveSnakeAction = {
    type: typeof MOVE_SNAKE,
};

export let createMatrixAction = {
    type: typeof CREATE_MATRIX,
};

export let createSnakeAction = {
    type: typeof CREATE_SNAKE,
};