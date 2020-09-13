module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    let num = Math.pow(2, disksNumber) - 1;
    let secs = Math.floor(num/ (turnsSpeed/3600)) ;
    
    return {turns: num, seconds: secs};
   
}