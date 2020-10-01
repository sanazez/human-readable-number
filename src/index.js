module.exports = function toReadable(number) {
    let str = number + '';
    let arrayNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrayTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function toReadableTwoNum(tenNum, string) {
        if (string.slice(1) == 0) return arrayTens[tenNum - 2];
        else return arrayTens[tenNum - 2] + ' ' + arrayNum[Number(string.slice(1))];
    }
    if (number < 20) {
        return arrayNum[number];
    } else {
        if (str.length == 2) return toReadableTwoNum(Number(str.slice(0, 1)), str);
        if (str.length === 3) {
            if (Number(str.slice(1)) < 20 && Number(str.slice(1)) != 0) {
                return arrayNum[Number(str.slice(0, 1))] + ' hundred ' + arrayNum[Number(str.slice(1))]
            } else {
                if (str.slice(1) === '00') return arrayNum[Number(str.slice(0, 1))] + ' hundred';
                else {
                    if (str.slice(2) === '0') return arrayNum[Number(str.slice(0, 1))] + ' hundred ' + arrayTens[Number(str.slice(1, 2)) - 2];
                    else return arrayNum[Number(str.slice(0, 1))] + ' hundred ' + toReadableTwoNum(Number(str.slice(1, 2)), str.slice(1));
                }
            }
        }
    }
}