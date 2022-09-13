const {createIncrementalCompilerHost} = require('typescript');

function isolateDuplicates(text) {
    const num = String(text).split("");

    let input = text;
    let str = "";

    if(typeof(text) != "string") throw "Please enter a valid string";
    
    for (let i = 0; i < input.length; i++) {
        if (typeof(num[i]) == "string"){
            let current = String(input).charAt(i).toLowerCase();
            let next = String(input)
            .charAt(i + 1)
            .toLowerCase();
            if ( current != next) {
                str += num[i] + "<"
            } else {
                str += num[i];
            }
        }  else {
        throw "Please enter a valid string"
        }
    }

    let arrofChar = str.split("<");
    let splitlength = 0;
    let formatstr = "";

    arrofChar.forEach((ar) => {
        if (ar.length > 2) {
            splitlength += 1;
        }
        let excess = ar.slice(2, ar.length);
        if (excess.length > 0){
            let first = ar.slice(0, 2);
            return (formatstr += `${first}[${excess}]`);
        } else {
            return (formatstr += ar);
        }
    });
    return [formatstr, splitlength];
}
  





module.exports = isolateDuplicates;
