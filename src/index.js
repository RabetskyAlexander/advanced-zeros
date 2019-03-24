module.exports = function getZerosCount(number, base) {
    let baseMultipliers = getMultipliers(base);
    let countMinZeros = [];
    function getMultipliers (numb) {
        let objOfNumber = {};
        for (let i = 2; numb !== 1; i++) {
            if (numb%i === 0) {
                if ( i in objOfNumber) {
                    ++objOfNumber[i]['pow'];
                }
                else {
                    objOfNumber[i] = {
                        'pow': 1
                    }
                }
                numb = numb/i;
                i--;
            }
        }
        return objOfNumber;
    }

    for (let i in baseMultipliers) {
        let countNumb = 0;

        for (let j = 1; Math.floor(number / Math.pow(i, j)) > 0; j++) {
            countNumb += Math.floor(number / Math.pow(i, j));
        }
        countMinZeros.push(Math.floor(countNumb/baseMultipliers[i]['pow']));
    }
    return Math.min.apply(null,countMinZeros);
}