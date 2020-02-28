module.exports = function repeater(str, options) {
    
    let string ='';

    let {
        repeatTimes = 1,
        separator = '+',
        addition = (options.addition === undefined) ? '' : options.addition + '',
        additionRepeatTimes = 1,
        additionSeparator = '|',    
    } = options;

    this.options = options;

    if(typeof(str) !== 'string') {
        str = String(str);
    }

    for(let i = repeatTimes; i > 0 ; i-= 1) {
        string += str; 
        for(let j = additionRepeatTimes; j > 0 ; j-= 1) {
            string += addition;
            if (j > 1) {string+= additionSeparator;}
        } 
        if (i > 1) {string += separator;}
    }

    return string;
};
  