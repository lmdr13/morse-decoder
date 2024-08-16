const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
/*function toStr(expr){
    let map = new Map([
        ['10', '.'], 
        ['11', '-'],
        ['00', MORSE_TABLE[str.substring(0,i)]],
        ['**', ' ']
      ]);
    let str = '';
    for (let i = 0; i < expr.length; i+=2){
        let a =expr.substring(i,i+2);
        str+=map.get(a);
    }
    return str;
}*/
function decode(expr) {
    let map = new Map([
        ['10', '.'], 
        ['11', '-'],
        ['00', ''],
        ['**', ' ']
      ]);
      let ans = '';
      let str = '';
      for (let i = 0; i < expr.length; i+=10){
        let substr = expr.substring(i, i+10); 
        if (substr == '**********') {
          ans += ' ';
          continue;
        }
        for (let j = 0; j < substr.length; j +=2){
            let a = substr.substring(j,j+2);
            if (a == '00') {
                continue;
            }
            str += map.get(a);
        }
        ans += MORSE_TABLE[str];
        str = '';
      }


    return ans;    
}

module.exports = {
    decode
}