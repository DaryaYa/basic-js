module.exports = function getSeason(date) {
 
  if(!date) return 'Unable to determine the time of year!'

   if (Object.keys(date).length > 0 || !isNaN(date)) {
    throw new Error();
  }

  let num = date.getMonth();

  switch (true) {
    
    case num>=2 && num <=4:
     return 'spring';  
     
    case num>=5 && num <=7:
     return 'summer';  
     
    case num>=8 && num <=10:
     return 'autumn';  
      
  default:
     return 'winter';
     
  }

};
