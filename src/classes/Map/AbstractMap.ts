import AbstractMatrix from "../Matrix/AbstractMatrix";
import AbstractUnitPart from "../UnitParts/AbstractUnitPart";

export default class AbstractMap {
    matrix: AbstractMatrix | null;

    constructor() {
        this.matrix = null as AbstractMatrix | null;
    }

    /** parts: array [x: number, y: number, value: number] */
    fillMap(parts: Array<AbstractUnitPart>) {
        if (!this.matrix) return false;

        parts.map((item, index) => {
            let x: number = item.getX();
            let y: number = item.getY();
            let value: number | null = item.getValue();

            if (this.matrix !== null) {
                this.matrix.getMatrix()[x][y] = value;
            }
        });

        return true;
    }

}