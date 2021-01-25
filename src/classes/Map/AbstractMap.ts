import AbstractMatrix from "../Matrix/AbstractMatrix";
import AbstractUnitPart from "../UnitParts/AbstractUnitPart";

export default class AbstractMap {
    matrix: AbstractMatrix | null;

    constructor() {
        this.matrix = null;
    }

    /** parts: array [x: number, y: number, value: number] */
    fillMap(parts: Array<AbstractUnitPart>) {
        if (!this.matrix) return false;

        parts.map((item, index) => {
            let x: number | null = item.getX();
            let y: number | null = item.getY();
            let value: number = item.getValue();

            this.matrix[x][y] = value;
        });

        return true;
    }

}