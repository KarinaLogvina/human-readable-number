module.exports = function toReadable(number) {
    const words = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    }

    const localTwenty = (number, internal) => {
        if(internal && number == 0) {
            return '';
        }
        if(internal) {
            return ' ' + words[number];
        }
        return words[number];
    }

    const localTens = (number, internal) => {
        if (number <= 20) {
            return localTwenty(number, internal);
        } else {
            const [a, b] = number.toString();
            if(internal) {
                return ' ' + words[a * 10] + localTwenty(b, true);
            } else {
              return words[a * 10] + localTwenty(b, true);        
            }
        }
    }
    const localHundreds = (number) => {
        if (number < 100) {
            return localTens(number);
        } else {
            const [a, b, c] = number.toString();
            return localTwenty(a) + ' hundred' + localTens(+`${b}${c}`, true);
        }
    }

    return localHundreds(number);
}
