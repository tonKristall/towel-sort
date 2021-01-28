
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let mass = [];
    if ((arguments.length == 0) || (matrix.length == 0)) {
        return mass;
    }
    let str = [];
    for (i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            for (j = 0; j < matrix[i].length; j++) {
                str.push(matrix[i][j]);
            }
        } else {
            for (j = matrix[i].length - 1; j >= 0; j--) {
                str.push(matrix[i][j]);
            }
        }
    }
    return str;
}
