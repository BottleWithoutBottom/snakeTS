import AbstractUnitPart from "./AbstractUnitPart";

export default class MovingUnitPart extends AbstractUnitPart {
    private prevPart: AbstractUnitPart | null;
    private nextPart: AbstractUnitPart | null;

    constructor(props: object) {
        super(props);

        this.prevPart = null;
        this.nextPart = null;
    }

    get getPrevPart(): AbstractUnitPart | null {
        return this.prevPart;
    }

    set setPrevPart(value: AbstractUnitPart | null) {
        this.prevPart = value;
    }

    get getNextPart(): AbstractUnitPart | null {
        return this.nextPart;
    }

    set setNextPart(value: AbstractUnitPart | null) {
        this.nextPart = value;
    }
}