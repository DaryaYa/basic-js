module.exports = function transform(arr) {
    
    if(!(Array.isArray(arr))) {throw new Error()}
    let array = [];

   for (let i = 0; i < arr.length; i++){
        switch(arr[i]) {
            case '--discard-next': {
                if(i + 1 < arr.length){
                    i++;
                };
                break;
            }

            case '--discard-prev': {
                if(i - 1 >= 0 && arr[i - 2] !== '--discard-next'){
                    array.pop();
                };
                break;
            }

            case '--double-next': {
                if(i + 1 < arr.length){
                    array.push(arr[i + 1]);
                };
                break;
            }

            case '--double-prev': {
                if(i - 1 >= 0 && arr[i - 2] !== '--discard-next'){
                    array.push(arr[i - 1]);
                };
                break;
            }

            default: {
                array.push(arr[i]);   
            }
        }
    };

    return array;
};
