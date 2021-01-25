import MovingUnitPart from "./MovingUnitPart";

export default class SnakeUnitPart extends MovingUnitPart {
    isTail: boolean;
    isHead: boolean;

    constructor(props: object) {
        super(props);

        this.isTail = false;
        this.isHead = false;
    }

    getIsTail(): boolean {
        return this.isTail;
    }

    setIsTail(value: boolean): boolean {
        this.isTail = value;

        return true;
    }

    getIsHead(): boolean {
        return this.isHead;
    }

    setIsHead(value: boolean) {
        this.isHead = value;
        return true;
    }

}