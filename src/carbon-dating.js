const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
let activity = 0;

module.exports = function dateSample(sampleActivity) {
   
if(typeof(sampleActivity) == 'string') {
  activity = parseFloat(sampleActivity);
} else {
  return false;
}

if (activity > 0 && activity <= MODERN_ACTIVITY) {
  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD / 0.693)} 

 return false;
};
