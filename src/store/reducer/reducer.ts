import {initialStateType} from "../store";
import {initialState} from "../store";
import {moveSnakeAction, createMatrixAction, createSnakeAction} from "../action/actionCreator";
import AbstractMatrix from "../../classes/Matrix/AbstractMatrix";
import SnakeUnit from "../../classes/Units/SnakeUnit";

const reducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case createMatrixAction.type:
            return {
                ...state,
                matrix: new AbstractMatrix(10, 10, 0),
            };

        case createSnakeAction.type:
            return {
                ...state,
                snake: new SnakeUnit
            }
    }
};