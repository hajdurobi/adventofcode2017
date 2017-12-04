const fs = require('fs');
const passphrases = fs.readFileSync('input/day4.txt').toString().split("\n").map(phrase => phrase.split('\r')[0]);

console.log(
    passphrases
            .map(isValid)
            .filter(x => x).length
);

function isValid(pp) {
    pp = pp.split(' ');
    var uniqueWords = pp.map(e => e.split('').sort().join('')).filter((val, i, pp) => { 
        return pp.indexOf(val) === i;
    }).length;
    return uniqueWords === pp.length
}