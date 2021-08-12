module.exports = function toReadable (number) {
  let a = {
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
  };

  
    if (number <= 19) {
      return a[number];
    } else if ((number >= 20 && number <= 90) && number % 10 === 0) {
      return a[number];
    } else if ((number >= 21 && number <= 99) && number % 10 !== 0) {
      return a[(Math.floor(number / 10)) * 10] + ' ' + a[number - Math.floor(number / 10) * 10];
    } else if ((number >= 100 && number <= 900) && number % 100 === 0) {
      return a[Math.floor(number / 100)] + ' ' + a[100];
    } else if ((number >= 101 && number <= 919) && (number - Math.floor(number / 100) * 100) <= 19) {
      return a[Math.floor(number / 100)] + ' ' + a[100] + ' ' + a[number - (Math.floor(number / 100)) * 100];
    } else if ((number >= 120 && number <= 990) && number % 10 === 0) {
      return a[Math.floor(number / 100)] + ' ' + a[100] + ' ' + a[(number - Math.floor(number / 100) * 100)];
    } else {
      return a[Math.floor(number / 100)] + ' ' + a[100] + ' ' + a[((number - Math.floor(number / 100) * 100) - (number - Math.floor(number / 10) * 10))] + ' ' + a[number - Math.floor(number / 10) * 10];
    }
  
}
