import AbstractUnit from "../classes/Units/AbstractUnit";
import AbstractMap from "../classes/Map/AbstractMap";

export let initialState = {
    matrix: null as Array<Array<number | null>> | null,
    snake: null as AbstractUnit | null,
    map: null as AbstractMap | null,
    rows: null as number | null,
    columns: null as number | null,
    initialMapValue: null as number | null,
    initialSnakeLength: null as number | null,
};
export let initialStateType = typeof initialState;
