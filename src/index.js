module.exports = function check(str, config) {
    let newConfig = [], 
        j = 0;
    function checkForType(typeOfBrackets) {
        if (newConfig[j-1] === typeOfBrackets[0]) {
            newConfig.splice(j, 1);
            newConfig.splice(j-1, 1);
            j = j - 2;
        }
    }
    for (let i = 0; i < str.length; i++) {        
        newConfig[j] = str[i];
        console.log(newConfig);
        for (let c = 0; c < config.length; c++) {
            cs = `${c}`;
            if (str[i] === config[cs][1]) {
                checkForType(config[cs]);
            }
        }
       j++; 
    }
    console.log(newConfig);
    if (newConfig.length == 0) {
        return true;
    }  else return false;
}
