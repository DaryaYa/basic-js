
module.exports = class DepthCalculator {

    // calculateDepth(arr) {
    // return 1 + (arr instanceof Array ? arr.reduce(function(max, item) {
    // return Math.max(max, calculateDepth(item));
    // }, 0) : -1);
    // }

    result = 0;

    calculateDepth(array, depth = 1) {
        this.result = depth;
        for (let item in array) {
            if (Array.isArray(array[item])) {
                this.calculateDepth(array.flat(), depth +=1);
                break;
            }
        }
        return this.result;
    }

};