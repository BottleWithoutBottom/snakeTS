export default class AbstractUnitPart {
    x: number | null;
    y: number | null;
    value: number | null;

    constructor(props: object) {
        this.x = null as number | null;
        this.y = null as number | null;
        this.value = null as number | null;
    }

    getX(): number {
        if (typeof this.x === "number") return this.x;
        throw new Error('part x is not set');
    }

    setX(x: number): boolean {
        this.x = x;
        return true;
    }

    getY(): number {
        if (typeof this.y === "number") return this.y;
        throw new Error('part y is not set');
    }

    setY(y: number): boolean {
        this.y = y;

        return true;
    }

    getValue(): number {
        if (typeof this.value === "number") return this.value;
        throw new Error('part value is not set');
    }

    setValue(value: number): boolean {
        this.value = value;

        return true;
    }
}