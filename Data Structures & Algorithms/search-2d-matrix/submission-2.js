class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let top = 0;
        let bot = rows - 1;
        let targetRow = -1;

        while (top <= bot) {
            const mid = Math.floor((top + bot) / 2);

            if (target >= matrix[mid][0] && target <= matrix[mid][cols - 1]) {
                targetRow = mid;
                break;
            } else if (matrix[mid][0] > target) {
                bot = mid - 1;
            } else {
                top = mid + 1;
            }
        }


        if (targetRow === -1) {
            return false;
        }

        let left = 0;
        let right = cols - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (matrix[targetRow][mid] === target) {
                return true;
            }

            if (matrix[targetRow][mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return false;
    }
}
