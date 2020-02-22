module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) return false;
  
 let arr = members.filter(a=>typeof(a) === 'string');
 
 let str = arr.map(a=>a.trim()).map(a=>a.toUpperCase()).map(item => item.split('')).map(elem => elem.splice(0,1)).sort().join('');
  return str;
};