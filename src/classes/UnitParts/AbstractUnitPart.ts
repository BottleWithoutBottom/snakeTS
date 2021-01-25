export default class AbstractUnitPart {
    x: number | null;
    y: number | null;
    value: number | null;

    constructor(props: object) {
        this.x = null;
        this.y = null;
        this.value = null;
    }

    getX(): number | null {
        return this.x;
    }

    setX(x: number): boolean {
        this.x = x;
        return true;
    }

    getY(): number | null {
        return this.y;
    }

    setY(y: number): boolean {
        this.y = y;

        return true;
    }

    getValue(): number {
        return this.value;
    }

    setValue(value: number): boolean {
        this.value = value;

        return true;
    }
}