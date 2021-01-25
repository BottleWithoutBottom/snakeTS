type propType = {
    rows: number,
    columns: number,
    initialValue: number;
}

export default class AbstractMatrix {
    matrix: Array<Array<number>>;
    rows: number;
    columns: number;
    initialValue: number;


    constructor(props: propType) {
        this.rows = props.rows;
        this.columns = props.columns;
        this.initialValue = props.initialValue;

        this.matrix = [];
    }

    generateMatrix(): boolean {
        let matrix: Array<Array<number>> = [];

        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                matrix[row][column] = this.initialValue;
            }
        }

        this.matrix = matrix;
        return true;
    }

    getMatrix(): Array<Array<number>> {
        return this.matrix;
    }
}