import MovingUnit from "./MovingUnit";
import AbstractUnitPart from "../UnitParts/AbstractUnitPart";

export default class SnakeUnit extends MovingUnit {
    length: number;

    constructor(props: object) {
        super(props);

        this.length = 1;
    }

    getLength(): number {
        return this.length;
    }

    setLength(length: number): boolean {
        if (!length) throw new Error('length not found');

        this.length = length;
        return true;
    }

    moveParts(): boolean {


        return true;
    }
}