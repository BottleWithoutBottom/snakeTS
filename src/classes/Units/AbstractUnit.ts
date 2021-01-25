import AbstractUnitPart from "../UnitParts/AbstractUnitPart";

export default class AbstractUnit {
    parts: Array<AbstractUnitPart>;

    constructor(props: object) {
        this.parts = [];

    }

    setParts(parts: Array<AbstractUnitPart>): boolean {
        if (!parts) throw new Error('parts not found');

        parts.map((item, i) => this.setPart(item));

        return true;
    }

    setPart(part: AbstractUnitPart): boolean {
        if (!part) throw new Error('part not found');

        this.parts.push(part);
        return true;
    }
}