module.exports = function countCats(backyard) {

    return backyard.flat().filter(a => a === '^^').length;
};