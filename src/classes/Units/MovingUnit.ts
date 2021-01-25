import AbstractUnit from "./AbstractUnit";

export default class MovingUnit extends AbstractUnit {
    direction: number;
    axies: string;
    isMoving: boolean;

    constructor(props: object) {
        super(props);

        this.direction = 0;
        this.axies = '';
        this.isMoving = false;
    }

    getAxies(): string {
        return this.axies;
    }

    setAxies(axies: string): boolean {
        if (!axies) throw new Error('axies not found');

        this.axies = axies;
        return true;
    }

    getDirection(): number {
        return this.direction;
    }

    setDirection(direction: number): boolean {
        if (!direction) throw new Error('direction not found');

        this.direction = direction;
        return true;
    }

    setDynamicParams(axies: string, direction: number) {
        this.setAxies(axies);
        this.setDirection(direction);

        return true;
    }

    getIsMoving(): boolean {
        return this.isMoving;
    }

    setIsMoving(value: boolean): boolean {
        this.isMoving = value;
        return true;
    }
}